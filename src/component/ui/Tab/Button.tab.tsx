interface ButtonTabProps {
  value: string;
  label: string;
  iconName?: string;
  isActive: boolean;
  onChange: () => void;
  activeTabRef: React.RefObject<HTMLButtonElement | null>;
}

export const ButtonTab: React.FC<ButtonTabProps> = ({
  value,
  label,
  iconName,
  isActive,
  onChange,
  activeTabRef,
}) => {
  return (
    <button
      key={value}
      ref={isActive ? activeTabRef : null}
      onClick={() => onChange()}
      className={`flex items-center cursor-pointer gap-2 rounded-8 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 shrink-0 relative z-10`}
    >
      <p
        className={`flex items-center gap-2 ${isActive ? "font-extrabold text-gray-800" : "text-gray-500 font-bold"}`}
      >
        <i className={`pi ${iconName}`} />
        {label}
      </p>
    </button>
  );
};
