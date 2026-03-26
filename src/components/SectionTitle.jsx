function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 animate-fade-up">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700/80">Celebration Details</p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-maroon-700 md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-maroon-700/80 md:text-base">{subtitle}</p> : null}
      <div className="ornamental-divider mt-5 max-w-xs" />
    </div>
  );
}

export default SectionTitle;
