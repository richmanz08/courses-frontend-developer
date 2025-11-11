interface QueryStringExampleComponentProps {
  userID: string;
}
export const QueryStringExampleComponent = ({
  userID,
}: QueryStringExampleComponentProps) => {
  return <div>Query String Example for User ID: {userID}</div>;
};
