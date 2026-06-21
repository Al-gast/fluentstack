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
};

export function getCodingPracticeCompletionGate({
  challenge,
  validationResults,
  completedChecklistItems,
  isValidationReady,
}: GetCodingPracticeCompletionGateParams): CodingPracticeCompletionGate {
  const hasAutoValidation = Boolean(challenge.validation?.checks.length);

  if (hasAutoValidation) {
    const requiredResults = validationResults.filter((result) => result.required);
    const gateResults = requiredResults.length > 0 ? requiredResults : validationResults;
    const passedCount = gateResults.filter((result) => result.passed).length;
    const totalCount = gateResults.length;
    const canComplete = isValidationReady && totalCount > 0 && passedCount >= totalCount;

    if (!isValidationReady) {
      return {
        mode: "auto-validation",
        canComplete: false,
        summary: "Menyiapkan validasi",
        statusLabel: "Validasi disiapkan",
        helperText: "Tunggu validasi otomatis siap sebelum menandai latihan selesai.",
        buttonLabel: "Validasi dulu",
      };
    }

    return {
      mode: "auto-validation",
      canComplete,
      summary: `${passedCount}/${totalCount} validasi wajib lolos`,
      statusLabel: canComplete ? "Siap selesai" : "Validasi belum lolos",
      helperText: canComplete
        ? "Semua validasi wajib sudah lolos. Simpan kode lalu tandai latihan selesai."
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
        ? "Checklist manual sudah lengkap. Simpan kode lalu tandai latihan selesai."
        : "Latihan ini tidak punya validasi otomatis, jadi checklist manual menjadi gate completion.",
      buttonLabel: canComplete ? "Tandai selesai" : "Checklist dulu",
    };
  }

  return {
    mode: "manual",
    canComplete: true,
    summary: "Manual completion",
    statusLabel: "Siap selesai",
    helperText: "Latihan ini bisa ditandai selesai setelah kamu menyimpan kode.",
    buttonLabel: "Tandai selesai",
  };
}
