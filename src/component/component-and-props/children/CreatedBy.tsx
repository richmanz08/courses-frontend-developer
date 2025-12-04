interface CreatedByProps {
  createdBy: string;
}

export const CreatedBy: React.FC<CreatedByProps> = ({ createdBy }) => {
  return (
    <div>
      <p>Created by: {createdBy}</p>
    </div>
  );
};
