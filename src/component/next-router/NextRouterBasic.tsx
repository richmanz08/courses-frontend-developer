"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { TerminalUI } from "../ui/TerminalUI";

export const NextRouterBasicExampleComponent = () => {
  const router = useRouter();

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">
            🧭 Next.js Router Guide
          </h1>
          <p className="text-gray-600 text-lg">
            เรียนรู้การใช้งาน Next.js App Router และ Navigation Hooks
          </p>
        </div>

        {/* Content router push */}
        <div className="bg-white rounded-lg p-6 mb-6">
          {/* Code Example Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💻</span>
            <h2 className="text-xl font-semibold text-gray-800">
              router.push() ตัวอย่างพื้นฐาน
            </h2>
          </div>

          <TerminalUI fileName="NextRouterBasic.tsx" name="Use Router Push">
            {/* Code Content */}
            <div className="bg-gray-900 p-4 overflow-x-auto">
              <pre className="text-sm leading-relaxed">
                <code className="text-gray-100">
                  <span className="text-purple-400">import</span> {`{ `}
                  <span className="text-blue-400">useRouter</span> {`} `}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">
                    &quot;next/navigation&quot;
                  </span>
                  ;
                  {`

`}
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">router</span> ={" "}
                  <span className="text-yellow-400">useRouter</span>();
                  {`

`}
                  <span className="text-gray-500">{`// Navigate to a different route`}</span>
                  {`
`}
                  <span className="text-blue-300">router</span>.
                  <span className="text-yellow-400">push</span>(
                  <span className="text-green-400">
                    &quot;/next-router/user/12345&quot;
                  </span>
                  );
                </code>
              </pre>
            </div>
          </TerminalUI>

          {/* Action Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Try it yourself!
                </h3>
                <p className="text-sm text-gray-600">
                  Click the button below to navigate to user page with ID:{" "}
                  <code className="bg-white px-2 py-1 rounded text-blue-600">
                    12345
                  </code>
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  label="Go to User Page"
                  icon="pi pi-arrow-right"
                  className="p-button-raised"
                  onClick={() => router.push("/next-router/user/12345")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
