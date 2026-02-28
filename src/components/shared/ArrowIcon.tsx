interface ArrowIconProps {
  className?: string;
  withLine?: boolean;
}

export default function ArrowIcon({
  className = "w-3.5 h-3.5",
  withLine = false,
}: ArrowIconProps) {
  return (
    <span className="flex items-center gap-0.5">
      {withLine && <span className="w-5 h-[1.5px] bg-current inline-block" />}
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </span>
  );
}
