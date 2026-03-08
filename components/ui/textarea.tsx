import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-(--border-default) placeholder:text-(--text-muted) focus-visible:border-(--border-strong) focus-visible:ring-(--focus-ring) aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-(--bg-elevated-60) px-3 py-2 text-base text-(--text-primary) shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-(--state-disabled-opacity) md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
