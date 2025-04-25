import { useState, useRef, useEffect } from "react";

type CustomMultiSelectProps = {
  label: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function CustomMultiSelect({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}: CustomMultiSelectProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option);
      } else {
        return [...prev, option];
      }
    });
  };

  const removeOption = (option: string) => {
    setSelectedOptions((prev) => prev.filter((item) => item !== option));
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex flex-col gap-[10px] relative w-full"
      ref={dropdownRef}
    >
      <label className="font-[600] text-[18px] text-[#525252]">{label}*</label>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="border border-[#CBD5E1] rounded-full py-[8px] px-[12px] font-[500] text-[14px] text-[#8D8D8D] cursor-pointer relative"
      >
        {selectedOptions.length === 0 ? (
          <span className="text-[#8D8D8D]">Select {label.toLowerCase()}</span>
        ) : (
          <div className="flex flex-wrap gap-1">
            {selectedOptions.map((option) => (
              <span
                key={option}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full flex items-center gap-1 text-sm"
              >
                {option}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOption(option);
                  }}
                  className="text-red-500 font-bold hover:text-red-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div className="mt-[90px] border border-[#CBD5E1] rounded-lg shadow-md max-h-40 overflow-y-auto bg-white z-10 absolute w-full">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedOptions.includes(option)
                  ? "bg-gray-200 font-semibold"
                  : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
