type BlockRequirementBadgeProps = {
  isRequired: boolean;
  compact?: boolean;
};

export function BlockRequirementBadge({
  isRequired,
  compact = false,
}: BlockRequirementBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 rounded-full border font-semibold ${
        compact ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs"
      } ${
        isRequired
          ? "border-fs-warning/30 bg-fs-warning-soft text-fs-warning"
          : "border-fs-border bg-fs-surface-soft text-fs-text-muted"
      }`}
    >
      {isRequired ? "Wajib" : "Opsional"}
    </span>
  );
}
