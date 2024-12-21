import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export function Section({ title, children }: Props) {
  return (
    <div>
      <h2 className="text-2xl mb-4">{title}</h2>
      {children}
    </div>
  );
}
