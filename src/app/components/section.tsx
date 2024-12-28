import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export function Section({ title, className, children }: Props) {
  return (
    <div className={className}>
      <h2 className="text-2xl mb-4">{title}</h2>
      {children}
    </div>
  );
}
