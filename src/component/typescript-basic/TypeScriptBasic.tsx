interface TypeScriptBasicProps {
  title: string;
}

export const TypeScriptBasicComponent: React.FC<TypeScriptBasicProps> = ({
  title,
}) => {
  return <h1>{title}</h1>;
};
