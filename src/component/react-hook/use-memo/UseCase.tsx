/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from "react";
import { TerminalUI } from "../../ui/TerminalUI";
import { Dropdown } from "primereact/dropdown";
import { map } from "lodash";
import { SelectItem } from "primereact/selectitem";
import { Button } from "primereact/button";

interface CarData {
  carCode: string;
  carName: string;
  description: string;
}
const cars: CarData[] = [
  { carCode: "bmw", carName: "BMW", description: "A luxury vehicle brand" },
  {
    carCode: "audi",
    carName: "Audi",
    description: "A premium vehicle brand",
  },
  {
    carCode: "ford",
    carName: "Ford",
    description: "A popular American car brand",
  },
  {
    carCode: "tesla",
    carName: "Tesla",
    description: "An electric vehicle pioneer",
  },
  {
    carCode: "toyota",
    carName: "Toyota",
    description: "A reliable car manufacturer",
  },
];

// before using useMemo
const UseMemoUseCaseNoOptimized: React.FC = () => {
  const [count, setCount] = useState(0);
  const [selectedCar, setSelectedCar] = useState<SelectItem | null>(null);

  function leadOptions(cars: CarData[]): SelectItem[] {
    const options = map(cars, (car) => ({
      value: car.carCode,
      label: car.carName,
    }));
    console.log("🍏 Mapping cars to options... worked", options);
    return options;
  }
  return (
    <div>
      <TerminalUI name="UseMemo Use Case" fileName="UseCase.tsx">
        <h1>UseMemo Use Case</h1>
        <Dropdown
          value={selectedCar}
          onChange={(e) => setSelectedCar(e.value)}
          options={leadOptions(cars)}
          optionLabel="label"
          placeholder="Select a Car"
          className="w-full md:w-14rem"
        />
        <Button className="!mt-2" onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>
      </TerminalUI>
    </div>
  );
};

// after using useMemo
const UseMemoUseCaseOptimized: React.FC = () => {
  const [carList, setCarList] = useState<CarData[]>(cars);
  const [count, setCount] = useState(0);
  const [selectedCar, setSelectedCar] = useState<SelectItem | null>(null);

  const options = useMemo(() => {
    const opts = map(carList, (car) => ({
      value: car.carCode,
      label: car.carName,
    }));
    console.log("🌽 Mapping cars to options... worked", opts);
    return opts;
  }, [carList]);
  return (
    <div>
      <TerminalUI name="UseMemo Use Case Optimized" fileName="UseCase.tsx">
        <h1>UseMemo Use Case Optimized</h1>
        <Button
          onClick={() => setCarList((prev) => prev.slice(1, prev.length))}
        >
          Removed car item on top item
        </Button>
        <Dropdown
          value={selectedCar}
          onChange={(e) => setSelectedCar(e.value)}
          options={options}
          optionLabel="label"
          placeholder="Select a Car"
          className="w-full md:w-14rem"
        />
        <Button className="!mt-2" onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>
      </TerminalUI>
    </div>
  );
};

export const UseMemoUseCase: React.FC = () => {
  return (
    <div>
      <UseMemoUseCaseNoOptimized />
      <div className="my-8 border-t border-gray-700" />
      {/* <UseMemoUseCaseOptimized /> */}
    </div>
  );
};
