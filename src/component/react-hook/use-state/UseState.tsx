"use client";

import { UseStateBasicExample } from "./basic/Basic";
import { IntermediateExample } from "./intermediate/Intermidiate";
import { AdvancedExample } from "./advanced/Advanced";

export const UseStateHookExample = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">
            🪝 useState Hook Examples
          </h1>
          <p className="text-gray-600 text-lg">From Basic to Advanced Usage</p>
        </div>
        <UseStateBasicExample />
        <IntermediateExample />
        <AdvancedExample />
      </div>
    </div>
  );
};
