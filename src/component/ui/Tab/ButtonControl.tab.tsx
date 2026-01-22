interface ButtonTabControlProps {
  type: ActionButton;
  onClick: (value: ActionButton) => void;
}

export type ActionButton = "prev" | "next";

export const ButtonTabControl: React.FC<ButtonTabControlProps> = ({
  type,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick(type)}
      className={`absolute cursor-pointer ${type === "prev" ? "left-0" : "right-0"} z-10 w-[44px] h-[48px] px-3 text-basegray-350 bg-[#E9ECF1] rounded-8 shadow-md`}
    >
      <span className="text-2xl text-gray-800">
        {type === "prev" ? "‹" : "›"}
      </span>
    </button>
  );
};
