/* eslint-disable react-hooks/immutability */

import { InputText } from "primereact/inputtext";
import React, { useRef } from "react";
import { TerminalUI } from "../../ui/TerminalUI";
import { Button } from "primereact/button";
import Image from "next/image";

// before use use useRef
const BeforeUseRef: React.FC = () => {
  let searchRefTimeout: NodeJS.Timeout;
  console.log("Render BeforeUseRef");

  const onSearch = (val: string) => {
    // some search logic
    // send api request with debounce
    if (searchRefTimeout) {
      clearTimeout(searchRefTimeout);
    }
    searchRefTimeout = setTimeout(() => {
      console.log("searching...", val);
    }, 1000);
  };

  return (
    <div>
      <TerminalUI name="useRef use case" fileName="UseRef.tsx">
        <h1 className="text-gray-400">Before useRef</h1>
        <InputText
          placeholder="ค้นหาชื่อ..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </TerminalUI>
    </div>
  );
};

// after use useRef
const AfterUseRef: React.FC = () => {
  const searchRefTimeout = useRef<NodeJS.Timeout | null>(null);

  console.log("Render AfterUseRef");
  const onSearch = (val: string) => {
    // some search logic
    // send api request with debounce
    if (searchRefTimeout.current) {
      clearTimeout(searchRefTimeout.current);
    }
    searchRefTimeout.current = setTimeout(() => {
      console.log("searching...", val);
    }, 1000);
  };

  return (
    <div>
      <TerminalUI name="useRef use case" fileName="UseRef.tsx">
        <h1 className="text-gray-400">After useRef</h1>
        <InputText
          placeholder="ค้นหาชื่อ..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </TerminalUI>
    </div>
  );
};

// useRef reference element
const ElementByRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      console.log("ElementByRef", inputRef);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <TerminalUI name="useRef use case" fileName="UseRef.tsx">
        <h1 className="text-gray-400">Element by useRef</h1>
        <div className="flex flex-col gap-4">
          <InputText ref={inputRef} placeholder="กรอกชื่อ" />
          <Button className="mt-2" onClick={focusInput}>
            Focus Input
          </Button>
        </div>
        <div className="mt-6">
          <div className="min-h-screen">
            <div ref={areaRef} className="w-full flex justify-center">
              <Image
                src="https://petapixel.com/assets/uploads/2024/01/The-Star-of-System-Sol-Rectangle-640x800.jpg"
                width={200}
                height={200}
                alt="useRef Element"
              />
            </div>
          </div>
        </div>

        <Button
          className="mt-2"
          onClick={() =>
            areaRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "end",
            })
          }
        >
          Scroll to Area
        </Button>
      </TerminalUI>
    </div>
  );
};

export const UseRefUseCase: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>UseRef Use Case</h1>
      <BeforeUseRef />
      <AfterUseRef />
      <ElementByRef />
      <Button onClick={() => setCount((prev) => prev + 1)}>
        Re-render parent component: {count}
      </Button>
    </div>
  );
};
