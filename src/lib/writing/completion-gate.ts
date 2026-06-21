export type WritingPracticeCompletionGate = {
  canComplete: boolean;
  characterCount: number;
  wordCount: number;
  minimumCharacters: number;
  minimumWords: number;
  summary: string;
  statusLabel: string;
  helperText: string;
  buttonLabel: string;
};

type GetWritingPracticeCompletionGateParams = {
  draft: string;
  minimumCharacters?: number;
  minimumWords?: number;
};

const DEFAULT_MINIMUM_CHARACTERS = 80;
const DEFAULT_MINIMUM_WORDS = 8;

function countWords(value: string): number {
  const words = value.trim().match(/\S+/g);
  return words?.length ?? 0;
}

export function getWritingPracticeCompletionGate({
  draft,
  minimumCharacters = DEFAULT_MINIMUM_CHARACTERS,
  minimumWords = DEFAULT_MINIMUM_WORDS,
}: GetWritingPracticeCompletionGateParams): WritingPracticeCompletionGate {
  const normalizedDraft = draft.trim();
  const characterCount = normalizedDraft.length;
  const wordCount = countWords(normalizedDraft);
  const hasDraft = characterCount > 0;
  const hasEnoughCharacters = characterCount >= minimumCharacters;
  const hasEnoughWords = wordCount >= minimumWords;
  const canComplete = hasDraft && hasEnoughCharacters && hasEnoughWords;

  if (!hasDraft) {
    return {
      canComplete: false,
      characterCount,
      wordCount,
      minimumCharacters,
      minimumWords,
      summary: `0/${minimumCharacters} karakter`,
      statusLabel: "Draft kosong",
      helperText: "Tulis draft dulu sebelum menandai writing practice selesai.",
      buttonLabel: "Tulis dulu",
    };
  }

  if (!hasEnoughCharacters) {
    return {
      canComplete: false,
      characterCount,
      wordCount,
      minimumCharacters,
      minimumWords,
      summary: `${characterCount}/${minimumCharacters} karakter`,
      statusLabel: "Draft terlalu pendek",
      helperText: `Tambahkan detail sampai minimal ${minimumCharacters} karakter.`,
      buttonLabel: "Draft terlalu pendek",
    };
  }

  if (!hasEnoughWords) {
    return {
      canComplete: false,
      characterCount,
      wordCount,
      minimumCharacters,
      minimumWords,
      summary: `${wordCount}/${minimumWords} kata`,
      statusLabel: "Butuh detail",
      helperText: `Tambahkan detail sampai minimal ${minimumWords} kata.`,
      buttonLabel: "Tambahkan detail",
    };
  }

  return {
    canComplete,
    characterCount,
    wordCount,
    minimumCharacters,
    minimumWords,
    summary: `${characterCount} karakter · ${wordCount} kata`,
    statusLabel: "Siap selesai",
    helperText: "Draft sudah cukup untuk disimpan dan ditandai selesai.",
    buttonLabel: "Tandai selesai",
  };
}
