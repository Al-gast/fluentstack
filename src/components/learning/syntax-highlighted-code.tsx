type SyntaxHighlightedCodeProps = {
  code: string;
  language: string;
  className?: string;
};

type SyntaxToken = {
  text: string;
  className?: string;
};

type SyntaxRule = {
  pattern: RegExp;
  className: string;
};

const jsKeywords =
  "async|await|break|case|catch|class|const|continue|default|else|export|extends|false|finally|for|from|function|if|import|interface|let|new|null|return|switch|true|try|type|undefined|var|while";

const sqlKeywords =
  "alter|and|as|cascade|check|create|default|delete|enable|for|from|grant|insert|into|level|not|null|on|or|policy|primary|references|row|select|table|to|update|using|with";

function pushToken(tokens: SyntaxToken[], text: string, className?: string) {
  if (!text) {
    return;
  }

  const previous = tokens[tokens.length - 1];
  if (previous && previous.className === className) {
    previous.text += text;
    return;
  }

  tokens.push({ text, className });
}

function tokenizeWithRules(code: string, rules: SyntaxRule[]): SyntaxToken[] {
  const tokens: SyntaxToken[] = [];
  let index = 0;

  while (index < code.length) {
    const remaining = code.slice(index);
    const matchedRule = rules.find((rule) => rule.pattern.test(remaining));

    if (matchedRule) {
      const match = remaining.match(matchedRule.pattern);
      const value = match?.[0] ?? "";

      pushToken(tokens, value, matchedRule.className);
      index += value.length;
      continue;
    }

    pushToken(tokens, code[index]);
    index += 1;
  }

  return tokens;
}

function getHtmlTokens(code: string): SyntaxToken[] {
  return tokenizeWithRules(code, [
    { pattern: /^<!--[\s\S]*?-->/, className: "fs-syntax-comment" },
    { pattern: /^<!doctype[^>]*>/i, className: "fs-syntax-keyword" },
    { pattern: /^<\/?[A-Za-z][\w:-]*/, className: "fs-syntax-tag" },
    { pattern: /^\/?>/, className: "fs-syntax-tag" },
    { pattern: /^[A-Za-z_:][\w:.-]*(?=\s*=)/, className: "fs-syntax-attribute" },
    { pattern: /^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/, className: "fs-syntax-string" },
    { pattern: /^=/, className: "fs-syntax-punctuation" },
  ]);
}

function getCssTokens(code: string): SyntaxToken[] {
  return tokenizeWithRules(code, [
    { pattern: /^\/\*[\s\S]*?\*\//, className: "fs-syntax-comment" },
    { pattern: /^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/, className: "fs-syntax-string" },
    { pattern: /^@[A-Za-z-]+/, className: "fs-syntax-keyword" },
    { pattern: /^#[0-9a-fA-F]{3,8}\b/, className: "fs-syntax-number" },
    { pattern: /^--[\w-]+(?=\s*:)/, className: "fs-syntax-property" },
    { pattern: /^[a-z-]+(?=\s*:)/i, className: "fs-syntax-property" },
    { pattern: /^\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|fr|s|ms)?\b/, className: "fs-syntax-number" },
    {
      pattern:
        /^\b(?:auto|block|border-box|center|clamp|flex|grid|inline|none|repeat|solid|space-between|var)\b/,
      className: "fs-syntax-keyword",
    },
    { pattern: /^[.#]?[A-Za-z_][\w-]*(?=[\s,{.#:[>+~])/, className: "fs-syntax-selector" },
    { pattern: /^[{}()[\].,;:+\-*/%=&|!<>?]+/, className: "fs-syntax-punctuation" },
  ]);
}

function getJsTokens(code: string): SyntaxToken[] {
  return tokenizeWithRules(code, [
    { pattern: /^\/\*[\s\S]*?\*\//, className: "fs-syntax-comment" },
    { pattern: /^\/\/[^\n]*/, className: "fs-syntax-comment" },
    { pattern: /^`(?:\\.|[^`\\])*`|^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/, className: "fs-syntax-string" },
    { pattern: new RegExp(`^\\b(?:${jsKeywords})\\b`), className: "fs-syntax-keyword" },
    { pattern: /^\b\d+(?:\.\d+)?\b/, className: "fs-syntax-number" },
    { pattern: /^[A-Za-z_$][\w$]*(?=\s*\()/, className: "fs-syntax-function" },
    { pattern: /^[A-Za-z_$][\w$]*(?=\s*:)/, className: "fs-syntax-property" },
    { pattern: /^[{}()[\].,;:+\-*/%=&|!<>?]+/, className: "fs-syntax-punctuation" },
  ]);
}

function getJsonTokens(code: string): SyntaxToken[] {
  return tokenizeWithRules(code, [
    { pattern: /^"(?:\\.|[^"\\])*"(?=\s*:)/, className: "fs-syntax-property" },
    { pattern: /^"(?:\\.|[^"\\])*"/, className: "fs-syntax-string" },
    { pattern: /^\b(?:true|false|null)\b/, className: "fs-syntax-keyword" },
    { pattern: /^-?\d+(?:\.\d+)?/, className: "fs-syntax-number" },
    { pattern: /^[{}[\].,;:]+/, className: "fs-syntax-punctuation" },
  ]);
}

function getBashTokens(code: string): SyntaxToken[] {
  return tokenizeWithRules(code, [
    { pattern: /^#[^\n]*/, className: "fs-syntax-comment" },
    { pattern: /^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/, className: "fs-syntax-string" },
    { pattern: /^--?[\w-]+/, className: "fs-syntax-attribute" },
    { pattern: /^\$[A-Za-z_][\w]*/, className: "fs-syntax-property" },
    { pattern: /^\b(?:cat|cd|code|echo|git|ls|mkdir|npm|open|touch)\b/, className: "fs-syntax-function" },
    { pattern: /^[{}()[\].,;:+\-*/%=&|!<>?]+/, className: "fs-syntax-punctuation" },
  ]);
}

function getSqlTokens(code: string): SyntaxToken[] {
  return tokenizeWithRules(code, [
    { pattern: /^--[^\n]*/, className: "fs-syntax-comment" },
    { pattern: /^\/\*[\s\S]*?\*\//, className: "fs-syntax-comment" },
    { pattern: /^"(?:\\.|[^"\\])*"|^'(?:\\.|[^'\\])*'/, className: "fs-syntax-string" },
    { pattern: new RegExp(`^\\b(?:${sqlKeywords})\\b`, "i"), className: "fs-syntax-keyword" },
    { pattern: /^\b\d+(?:\.\d+)?\b/, className: "fs-syntax-number" },
    { pattern: /^[A-Za-z_][\w$]*(?=\s*\()/, className: "fs-syntax-function" },
    { pattern: /^[A-Za-z_][\w$]*(?=\s*=)/, className: "fs-syntax-property" },
    { pattern: /^[{}()[\].,;:+\-*/%=&|!<>?]+/, className: "fs-syntax-punctuation" },
  ]);
}

export function inferCodeLanguage(code: string): string {
  const trimmedCode = code.trim();

  if (/^</m.test(trimmedCode) || /<\/?[a-z][\s>]/i.test(trimmedCode)) {
    return "html";
  }

  if (/^\s*[{[]/.test(trimmedCode) && /"[^"]+"\s*:/.test(trimmedCode)) {
    return "json";
  }

  if (/(^|\n)\s*[.#]?[A-Za-z_][\w-]*\s*\{/.test(trimmedCode) || /\b[a-z-]+\s*:\s*[^;]+;/.test(trimmedCode)) {
    return "css";
  }

  if (/\b(const|let|function|return|=>|console\.log|import|export)\b/.test(trimmedCode)) {
    return "js";
  }

  if (/^\s*(cd|git|mkdir|npm|touch|ls|code|open)\b/m.test(trimmedCode)) {
    return "bash";
  }

  return "text";
}

function getSyntaxTokens(code: string, language: string): SyntaxToken[] {
  const normalizedLanguage = language.toLowerCase();

  if (normalizedLanguage === "html" || normalizedLanguage === "tsx") {
    return getHtmlTokens(code);
  }

  if (normalizedLanguage === "css") {
    return getCssTokens(code);
  }

  if (["js", "ts", "javascript", "typescript"].includes(normalizedLanguage)) {
    return getJsTokens(code);
  }

  if (normalizedLanguage === "json") {
    return getJsonTokens(code);
  }

  if (normalizedLanguage === "bash" || normalizedLanguage === "shell") {
    return getBashTokens(code);
  }

  if (normalizedLanguage === "sql") {
    return getSqlTokens(code);
  }

  return [{ text: code }];
}

export function SyntaxHighlightedCode({ code, language, className }: SyntaxHighlightedCodeProps) {
  const tokens = getSyntaxTokens(code, language);

  return (
    <code className={className}>
      {tokens.map((token, index) => (
        <span key={`${index}-${token.text}`} className={token.className}>
          {token.text}
        </span>
      ))}
    </code>
  );
}
