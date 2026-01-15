"use client";

import * as React from "react";
import { Button } from "../components/button/button"; 

export type AnouncementProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionText?: string;
  closable?: boolean;
  className?: string;
};

export function Anouncement({
  title,
  description,
  icon,
  actionText,
  closable = true,
  className = "",
}: AnouncementProps) {
  const [show, setShow] = React.useState(true);

  if (!show) return null;

  return (
    <div
      className={`
        relative mx-auto flex max-w-3xl items-center gap-4 overflow-hidden
        rounded-xl border border-border bg-background p-4 shadow-lg
        transition-all duration-500 ease-out
        animate-[slideIn_0.6s_ease-out]
        ${className}
      `}
    >
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
          {icon}
        </div>
      )}

      <div className="flex-1">
        <h4 className="text-sm font-semibold">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {actionText && (
        <div className="flex-shrink-0">
          <Button onClick={() => setShow(false)}>{actionText}</Button>
        </div>
      )}

      {closable && (
        <button
          onClick={() => setShow(false)}
          className="absolute right-2 top-2 rounded-md px-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          ✕
        </button>
      )}
    </div>
  );
}
