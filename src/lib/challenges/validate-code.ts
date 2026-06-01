import type {
  ChallengeCode,
  ChallengeValidation,
  ChallengeValidationCheck,
} from "@/types/challenge";

export type ChallengeValidationResult = {
  id: string;
  label: string;
  passed: boolean;
  required: boolean;
  message?: string;
};

function parseHtml(html: string): Document | null {
  if (typeof DOMParser === "undefined") {
    return null;
  }

  return new DOMParser().parseFromString(html, "text/html");
}

function hasExplicitElement(html: string, elementName: string): boolean {
  return new RegExp(`<\\s*${elementName}(\\s|>|/)`, "i").test(html);
}

function hasDoctype(html: string): boolean {
  return /^\s*<!doctype\s+html(\s|>)/i.test(html);
}

function findElements(document: Document | null, selector: string): Element[] {
  if (!document) {
    return [];
  }

  try {
    return Array.from(document.querySelectorAll(selector));
  } catch {
    return [];
  }
}

function selectorExists(document: Document | null, html: string, selector: string): boolean {
  const normalizedSelector = selector.trim().toLowerCase();

  if (["html", "head", "body"].includes(normalizedSelector)) {
    return hasExplicitElement(html, normalizedSelector);
  }

  return findElements(document, selector).length > 0;
}

function validateCheck(
  check: ChallengeValidationCheck,
  html: string,
  document: Document | null,
): Pick<ChallengeValidationResult, "passed" | "message"> {
  if (check.type === "hasDoctype") {
    return {
      passed: hasDoctype(html),
      message: "Tambahkan <!doctype html> di bagian paling atas.",
    };
  }

  if (check.type === "contains") {
    const expectedValue = check.valueIncludes ?? check.target ?? "";
    const passed = expectedValue
      ? html.toLowerCase().includes(expectedValue.toLowerCase())
      : false;

    return {
      passed,
      message: expectedValue ? `Pastikan kode memuat ${expectedValue}.` : "Isi target check belum lengkap.",
    };
  }

  if (!check.target) {
    return { passed: false, message: "Target check belum diisi." };
  }

  if (check.type === "hasElement") {
    return {
      passed: selectorExists(document, html, check.target),
      message: `Tambahkan elemen ${check.target}.`,
    };
  }

  if (check.type === "hasElementWithAttribute") {
    if (!check.attribute) {
      return { passed: false, message: "Attribute check belum diisi." };
    }

    const matchingElements = findElements(document, check.target);
    const passed = matchingElements.some((element) => {
      if (!element.hasAttribute(check.attribute ?? "")) {
        return false;
      }

      const attributeValue = element.getAttribute(check.attribute ?? "") ?? "";

      if (check.mustHaveValue && attributeValue.trim().length === 0) {
        return false;
      }

      if (check.valueIncludes) {
        return attributeValue.toLowerCase().includes(check.valueIncludes.toLowerCase());
      }

      return true;
    });

    return {
      passed,
      message: `Tambahkan attribute ${check.attribute} pada ${check.target}.`,
    };
  }

  if (check.type === "hasTextInElement") {
    const matchingElements = findElements(document, check.target);
    const passed = matchingElements.some((element) => {
      const text = element.textContent?.trim() ?? "";

      if (check.valueIncludes) {
        return text.toLowerCase().includes(check.valueIncludes.toLowerCase());
      }

      return text.length > 0;
    });

    return {
      passed,
      message: `Tambahkan teks di dalam ${check.target}.`,
    };
  }

  return { passed: false, message: "Tipe check belum didukung." };
}

export function validateChallengeCode(
  validation: ChallengeValidation | undefined,
  code: ChallengeCode,
): ChallengeValidationResult[] {
  if (!validation || validation.mode !== "html") {
    return [];
  }

  const html = code.html;
  const document = parseHtml(html);

  return validation.checks.map((check) => {
    const result = validateCheck(check, html, document);

    return {
      id: check.id,
      label: check.label,
      passed: result.passed,
      required: check.required ?? true,
      message: result.passed ? undefined : result.message,
    };
  });
}
