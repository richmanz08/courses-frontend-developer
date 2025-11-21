import { InformationBox } from "../ui/informationBox/InformationBox";

interface CustomerDetailComponentProps {
  customerId: string;
}

export const CustomerDetailComponent = ({
  customerId,
}: CustomerDetailComponentProps) => {
  return (
    <div className="px-8">
      hello customer detail {customerId}
      <InformationBox />
    </div>
  );
};
