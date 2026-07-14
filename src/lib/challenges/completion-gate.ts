import type { ChallengeValidationResult } from "@/lib/challenges/validate-code";
import type { CodingChallenge } from "@/types/challenge";

export type CodingPracticeCompletionGate = {
  mode: "auto-validation" | "manual-checklist" | "manual";
  canComplete: boolean;
  summary: string;
  statusLabel: string;
  helperText: string;
  buttonLabel: string;
};

type GetCodingPracticeCompletionGateParams = {
  challenge: CodingChallenge;
  validationResults: ChallengeValidationResult[];
  completedChecklistItems: string[];
  isValidationReady: boolean;
  requiresRuntimeRender?: boolean;
  isRuntimeRendered?: boolean;
};

export function getCodingPracticeCompletionGate({
  challenge,
  validationResults,
  completedChecklistItems,
  isValidationReady,
  requiresRuntimeRender = false,
  isRuntimeRendered = false,
}: GetCodingPracticeCompletionGateParams): CodingPracticeCompletionGate {
  const hasAutoValidation = Boolean(challenge.validation?.checks.length);

  if (hasAutoValidation) {
    const requiredResults = validationResults.filter((result) => result.required);
    const gateResults = requiredResults.length > 0 ? requiredResults : validationResults;
    const passedCount = gateResults.filter((result) => result.passed).length;
    const totalCount = gateResults.length;
    const hasPassedValidation = isValidationReady && totalCount > 0 && passedCount >= totalCount;
    const canComplete = hasPassedValidation && (!requiresRuntimeRender || isRuntimeRendered);

    if (!isValidationReady) {
      return {
        mode: "auto-validation",
        canComplete: false,
        summary: "Menyiapkan cek otomatis",
        statusLabel: "Cek otomatis disiapkan",
        helperText: "Tunggu cek otomatis siap sebelum menandai practice selesai.",
        buttonLabel: "Cek dulu",
      };
    }

    if (hasPassedValidation && requiresRuntimeRender && !isRuntimeRendered) {
      return {
        mode: "auto-validation",
        canComplete: false,
        summary: `${passedCount}/${totalCount} validasi wajib + jalankan preview`,
        statusLabel: "Preview belum dijalankan",
        helperText: "Jalankan React preview untuk memastikan component dapat dirender sebelum menandai practice selesai.",
        buttonLabel: "Jalankan preview",
      };
    }

    return {
      mode: "auto-validation",
      canComplete,
      summary: `${passedCount}/${totalCount} validasi wajib lolos`,
      statusLabel: canComplete ? "Validasi wajib lolos" : "Validasi belum lolos",
      helperText: canComplete
        ? "Semua validasi wajib sudah lolos. Simpan kode lalu tandai practice selesai."
        : "Tombol selesai aktif setelah semua validasi wajib lolos.",
      buttonLabel: canComplete ? "Tandai selesai" : "Belum lolos",
    };
  }

  if (challenge.checklist.length > 0) {
    const completedChecklistSet = new Set(completedChecklistItems);
    const completedCount = challenge.checklist.filter((item) => completedChecklistSet.has(item)).length;
    const canComplete = completedCount >= challenge.checklist.length;

    return {
      mode: "manual-checklist",
      canComplete,
      summary: `${completedCount}/${challenge.checklist.length} checklist selesai`,
      statusLabel: canComplete ? "Checklist siap" : "Checklist belum lengkap",
      helperText: canComplete
        ? "Checklist manual sudah lengkap. Simpan kode lalu tandai practice selesai."
        : "Practice ini memakai checklist manual. Selesaikan checklist sebelum menandai selesai.",
      buttonLabel: canComplete ? "Tandai selesai" : "Checklist dulu",
    };
  }

  return {
    mode: "manual",
    canComplete: true,
    summary: "Checklist manual",
    statusLabel: "Siap selesai",
    helperText: "Practice ini bisa ditandai selesai setelah kamu menyimpan kode.",
    buttonLabel: "Tandai selesai",
  };
}
