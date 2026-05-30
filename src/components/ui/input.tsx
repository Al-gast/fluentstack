import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-zinc-700/80 bg-zinc-950/60 px-2.5 py-1 text-base text-zinc-100 transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-100 placeholder:text-zinc-500 focus-visible:border-cyan-300/50 focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-zinc-900/70 disabled:opacity-60 aria-invalid:border-rose-300/50 aria-invalid:ring-2 aria-invalid:ring-rose-300/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
