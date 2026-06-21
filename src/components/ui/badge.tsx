import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-fs-border-strong focus-visible:ring-[3px] focus-visible:ring-fs-focus/45 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-fs-danger/50 aria-invalid:ring-fs-danger/20 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-fs-accent text-fs-text-inverse [a]:hover:bg-fs-accent-strong",
        secondary:
          "border border-fs-border bg-fs-surface-strong text-fs-text [a]:hover:bg-fs-surface",
        destructive:
          "bg-fs-danger-soft text-fs-danger focus-visible:ring-fs-danger/25 [a]:hover:bg-fs-danger-soft",
        outline:
          "border-fs-border text-fs-text [a]:hover:bg-fs-surface-strong [a]:hover:text-fs-text",
        ghost:
          "text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text",
        link: "text-fs-accent underline-offset-4 hover:text-fs-accent-strong hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
