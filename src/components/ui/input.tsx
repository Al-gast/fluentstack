import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-fs-border bg-fs-surface px-2.5 py-1 text-base text-fs-text transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fs-text placeholder:text-fs-text-muted focus-visible:border-fs-border-strong focus-visible:ring-2 focus-visible:ring-fs-focus/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-fs-surface-soft disabled:opacity-60 aria-invalid:border-fs-danger/50 aria-invalid:ring-2 aria-invalid:ring-fs-danger/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
