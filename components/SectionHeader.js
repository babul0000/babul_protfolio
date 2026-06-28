export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="reveal mb-16">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="w-1 h-4 rounded-full bg-blue-600" />
        <span
          className="text-xs font-semibold text-blue-600 uppercase tracking-widest"
          style={{ letterSpacing: "0.12em" }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight"
        style={{ letterSpacing: "-0.025em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-lg max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
