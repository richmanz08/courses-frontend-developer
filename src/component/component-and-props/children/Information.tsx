interface InformationProps {
  name: string;
}

export const Information: React.FC<InformationProps> = ({ name }) => {
  return (
    <div>
      <h1 className="my-2">header</h1>
      <div className="border border-gray-800 p-4">
        <h1>{name}</h1>
      </div>
    </div>
  );
};
