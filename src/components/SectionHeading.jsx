function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : ""}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className={`section-copy mt-4 ${centered ? "mx-auto" : ""}`}>{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
