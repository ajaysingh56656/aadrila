interface FeatureListProps {
  title?: string;
  items: string[];
  className?: string;
}

export default function FeatureList({
  title = "Features:",
  items,
  className = "",
}: FeatureListProps) {
  return (
    <div className={`mt-[16px] ${className}`}>
      {/* Title: 18px Bold Gray */}
      <h4 className="font-raleway text-[18px] lg:text-[20px] font-bold text-[#64748B] mb-3 leading-tight">
        {title}
      </h4>

      {/* List Container */}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="font-manrope flex items-start text-[14px] lg:text-[16px] text-[#475569] leading-relaxed text-left"
          >
            {/* Custom Bullet Point: 4px Dot */}
            <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-[#64748B] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
