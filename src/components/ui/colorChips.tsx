interface Option {
  mainOptionId: number;
  mainOptionName: string;
}

interface ColorChipsProps {
  options: Option;
  isSelected: boolean;
  onChipClick: (optionId: number) => void;
}
const ColorChips = ({ options, isSelected, onChipClick }: ColorChipsProps) => {
  const colorCode: { [key: string]: string } = {
    화이트: '#FFFFFF',
    베이지: '#F5F5DC',
    그레이: '#BEBEBE',
    블랙: '#000000',
    브라운: '#8B4513',
    레드: '#FF0000',
    핑크: '#FFC0CB',
    오렌지: '#FFA500',
    옐로우: '#FFFF00',
    그린: '#008000',
    블루: '#0000FF',
    퍼플: '#800080',
    골드: '#FFD700',
    실버: '#C0C0C0',
    네이비: '#000080',
    기타: '',
  };

  const getColor = (optionName: string) => {
    const colorKey = Object.keys(colorCode).find((key) =>
      optionName.includes(key)
    );
    return colorKey ? colorCode[colorKey] : null;
  };

  const selectedColor = getColor(options.mainOptionName);

  return (
    <div
      className={`product-card w-4.6 h-4.6 flex items-center justify-center p-0.5`}
    >
      <button
        className="color-chip"
        style={{
          border: isSelected ? '1px solid black' : '1px solid lightgray',
          backgroundColor: selectedColor ?? '#FFFFFF',
          width: '16px',
          height: '16px',
          marginRight: '6px',
          marginBottom: '6px',
          padding: '2px',
        }}
        onClick={() => onChipClick(options.mainOptionId)}
      ></button>
    </div>
  );
};

export default ColorChips;
