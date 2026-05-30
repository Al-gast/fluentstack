import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-zinc-700/80 bg-zinc-950/60 px-2.5 py-2 text-base text-zinc-100 transition-colors outline-none placeholder:text-zinc-500 focus-visible:border-cyan-300/50 focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:cursor-not-allowed disabled:bg-zinc-900/70 disabled:opacity-60 aria-invalid:border-rose-300/50 aria-invalid:ring-2 aria-invalid:ring-rose-300/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
