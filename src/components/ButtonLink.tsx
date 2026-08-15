import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const styles = {
    primary: "bg-olive text-white hover:bg-olive/90",
    secondary: "border border-olive text-olive hover:bg-olive hover:text-white",
    light: "bg-white text-olive hover:bg-white/90",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
