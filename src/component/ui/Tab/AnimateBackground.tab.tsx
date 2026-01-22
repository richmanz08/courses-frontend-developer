interface AnimatedBackgroundProps {
  width: number;
  left: number;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  width,
  left,
}) => {
  return (
    <div
      className="absolute top-1 bottom-1 bg-amber-500 rounded-lg shadow transition-all duration-300 ease-in-out z-0"
      style={{
        width: `${width}px`,
        left: `${left}px`,
      }}
    />
  );
};
