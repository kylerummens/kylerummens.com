"use client";

import { toast } from "sonner";

export function EmailButton() {
  const handleClick = () => {
    navigator.clipboard.writeText("k.d.rummens@gmail.com");
    toast.success("Email copied to clipboard");
  };

  return (
    <button className="link" onClick={handleClick}>
      Email
    </button>
  );
}
