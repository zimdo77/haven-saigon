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
        <p className="mb-3 text-xs uppercase tracking-[0.18em] text-olive/70 sm:text-sm sm:tracking-[0.2em]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 max-w-2xl whitespace-pre-line text-base leading-relaxed text-olive/70 sm:mt-4 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
