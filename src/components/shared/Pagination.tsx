interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  previousLabel?: string;
  nextLabel?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  previousLabel = "PREVIOUS",
  nextLabel = "NEXT",
}: PaginationProps) {
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mt-10 lg:mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3.5 text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider rounded-md border-2 border-primary btn-gradient text-white cursor-pointer transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {previousLabel}
      </button>
      {getPages().map((page, idx) =>
        page === "..." ? (
          <span
            key={`dots-${idx}`}
            className="w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-xs sm:text-sm lg:text-base font-bold text-dark border-2 border-primary rounded-md flex items-center justify-center tracking-widest select-none"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`w-8 h-8 sm:w-11 sm:h-11 lg:w-12 lg:h-12 text-xs sm:text-sm lg:text-base font-bold rounded-md border-2 border-primary transition-all duration-300 cursor-pointer ${
              currentPage === page
                ? "btn-gradient text-white"
                : "bg-white text-dark hover:btn-gradient hover:text-white"
            }`}
          >
            {page}
          </button>
        ),
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3.5 text-[10px] sm:text-xs lg:text-sm font-bold tracking-wider rounded-md border-2 border-primary bg-white text-dark cursor-pointer transition-all duration-300 hover:btn-gradient hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {nextLabel}
      </button>
    </div>
  );
}
