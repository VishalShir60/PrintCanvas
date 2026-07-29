function SectionHeader({
  label,
  title,
  description,
  align = "left",
  action,
}) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={`flex flex-col gap-5 md:flex-row md:items-end md:justify-between`}
    >
      <div className={`flex flex-col ${alignment}`}>
        {label && <p className="section-label">{label}</p>}

        <h2 className="section-title">{title}</h2>

        {description && (
          <p className="section-description">{description}</p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default SectionHeader;