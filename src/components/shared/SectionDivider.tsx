export default function SectionDivider() {
  return (
    <div className="flex flex-col items-center mt-5 gap-2">
      <span className="w-[2px] h-6 bg-primary" />
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 bg-primary rotate-45" />
        <span className="w-2 h-2 bg-primary rotate-45" />
        <span className="w-2 h-2 bg-primary rotate-45" />
        <span className="w-2 h-2 bg-primary rotate-45" />
      </div>
    </div>
  );
}
