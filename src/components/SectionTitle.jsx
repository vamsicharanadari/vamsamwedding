function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="font-heading text-3xl font-semibold text-maroon-700 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-3xl text-sm text-maroon-700/80 md:text-base">{subtitle}</p> : null}
    </div>
  );
}

export default SectionTitle;
