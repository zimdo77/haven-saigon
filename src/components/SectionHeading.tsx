type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-olive/70">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-4xl font-medium md:text-5xl">{title}</h2>

      {subtitle && (
        <p
          className={`mt-4 whitespace-pre-line max-w-2xl text-base leading-relaxed text-olive/70 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
