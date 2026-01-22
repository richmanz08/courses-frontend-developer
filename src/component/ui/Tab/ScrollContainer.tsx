interface ScrollContainerProps {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement | null>;
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  ref,
  children,
}) => {
  return (
    <div
      ref={ref}
      className="h-[48px] flex flex-1 gap-2 overflow-x-auto scroll-smooth p-1 mx-[54px] bg-[#E9ECF1] rounded-8 shadow-md justify-start sm:justify-center [&::-webkit-scrollbar]:hidden relative"
      style={{
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* Internet Explorer 10+ */,
      }}
    >
      {children}
    </div>
  );
};
