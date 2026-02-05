import { useMyCarList } from "./MyCarListHook";

export const MyCarList = () => {
  const {} = useMyCarList();
  return <div>My Car List</div>;
};
