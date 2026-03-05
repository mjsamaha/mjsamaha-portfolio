import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-(--text-primary) placeholder:text-(--text-muted) selection:bg-(--accent-primary) selection:text-(--accent-foreground-strong) border-(--border-default) h-9 w-full min-w-0 rounded-md border bg-(--bg-elevated-60) px-3 py-1 text-base text-(--text-primary) shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-(--state-disabled-opacity) md:text-sm",
        "focus-visible:border-(--border-strong) focus-visible:ring-(--focus-ring) focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
