import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-fs-focus/35 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-60 aria-invalid:border-fs-danger/50 aria-invalid:ring-3 aria-invalid:ring-fs-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-fs-accent text-fs-text-inverse shadow-[0_0_0_1px_var(--fs-accent-soft),0_10px_28px_var(--fs-accent-soft)] hover:bg-fs-accent-strong",
        outline:
          "border-fs-border bg-fs-surface text-fs-text hover:bg-fs-surface-strong aria-expanded:bg-fs-surface-strong aria-expanded:text-fs-text",
        secondary:
          "border border-fs-border bg-fs-surface-strong text-fs-text hover:bg-fs-surface aria-expanded:bg-fs-surface aria-expanded:text-fs-text",
        ghost:
          "text-fs-text-soft hover:bg-fs-surface-strong hover:text-fs-text aria-expanded:bg-fs-surface-strong aria-expanded:text-fs-text",
        destructive:
          "border border-fs-danger/35 bg-fs-danger-soft text-fs-danger hover:bg-fs-danger-soft focus-visible:ring-fs-danger/30",
        link: "text-fs-accent underline-offset-4 hover:text-fs-accent-strong hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
