// import { ProductImages } from "@/types/ResponseTypes";

interface Option {
  mainOptionId: number;
}
interface ColorChipsProps {
  options: Option[];
  onChipClick: (optionId: number) => void;
}

const ColorChips = ({ options, onChipClick }: ColorChipsProps) => {
  return (
    <div className="flex space-x-2 mt-2">
      {options.map((option) => (
        <button
          key={option.mainOptionId}
          className="w-6 h-6 rounded-full border"
          onClick={() => onChipClick(option.mainOptionId)}
        >
          {option.mainOptionId}
        </button>
      ))}
    </div>
  );
};

export default ColorChips;
