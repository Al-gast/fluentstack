import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-fs-border bg-fs-surface px-2.5 py-2 text-base text-fs-text transition-colors outline-none placeholder:text-fs-text-muted focus-visible:border-fs-border-strong focus-visible:ring-2 focus-visible:ring-fs-focus/20 disabled:cursor-not-allowed disabled:bg-fs-surface-soft disabled:opacity-60 aria-invalid:border-fs-danger/50 aria-invalid:ring-2 aria-invalid:ring-fs-danger/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
