"use client";
import { useRouter, usePathname } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { useState } from "react";

export const BreadCrumbExamples = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  // Static BreadCrumb
  const staticItems = [
    {
      label: "Home",
      command: () => {
        router.push("/");
        setCurrentPath("/");
      },
    },
    {
      label: "Products",
      command: () => {
        router.push("/products");
        setCurrentPath("/products");
      },
    },
    {
      label: "Electronics",
      command: () => {
        router.push("/products/electronics");
        setCurrentPath("/products/electronics");
      },
    },
  ];

  // Dynamic BreadCrumb based on current path
  const generateDynamicBreadCrumb = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    const items = segments.map((segment, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        command: () => {
          router.push(path);
          setCurrentPath(path);
        },
      };
    });
    return items;
  };

  const dynamicItems = generateDynamicBreadCrumb(currentPath);

  const home = {
    icon: "pi pi-home",
    command: () => {
      router.push("/");
      setCurrentPath("/");
    },
  };

  // Navigation examples
  const navigationExamples = [
    { path: "/", label: "Home" },
    { path: "/typescript-basic", label: "TypeScript Basics" },
    { path: "/next-router", label: "Next Router" },
    { path: "/next-router/user/123", label: "User Profile" },
    { path: "/products/electronics/phones", label: "Deep Nested" },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-100 p-8 rounded-xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">
            🍞 BreadCrumb with Next.js Router
          </h1>
          <p className="text-gray-600 text-lg">
            เรียนรู้การใช้งาน BreadCrumb กับ Next.js Router Navigation
          </p>
        </div>

        {/* Current Path Display */}
        <div className="bg-white rounded-lg p-4 mb-6 border-l-4 border-green-500">
          <h3 className="font-semibold text-gray-800 mb-2">Current Path:</h3>
          <code className="bg-gray-100 px-3 py-2 rounded text-green-600 font-mono">
            {currentPath}
          </code>
        </div>

        {/* Static BreadCrumb Example */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            📌 Static BreadCrumb Example
          </h2>
          <div className="mb-4">
            <BreadCrumb
              model={staticItems}
              home={home}
              className="my-2"
              style={{ background: "transparent" }}
            />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-700 mb-2">Code Example:</h4>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
              <code>{`const items = [
  {
    label: "Home",
    command: () => router.push("/")
  },
  {
    label: "Products", 
    command: () => router.push("/products")
  }
];

const home = {
  icon: "pi pi-home",
  command: () => router.push("/")
};`}</code>
            </pre>
          </div>
        </div>

        {/* Dynamic BreadCrumb Example */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            ⚡ Dynamic BreadCrumb Example
          </h2>
          <div className="mb-4">
            <BreadCrumb
              model={dynamicItems}
              home={home}
              className="my-2"
              style={{ background: "transparent" }}
            />
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-700 mb-2">Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Auto-generates breadcrumb from current path</li>
              <li>• Capitalizes segment names</li>
              <li>• Each segment is clickable for navigation</li>
              <li>• Updates dynamically with route changes</li>
            </ul>
            <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
              <code>{`const generateDynamicBreadCrumb = (path: string) => {
  const segments = path.split("/").filter(Boolean);
  return segments.map((segment, index) => {
    const path = "/" + segments.slice(0, index + 1).join("/");
    return {
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      command: () => router.push(path)
    };
  });
};`}</code>
            </pre>
          </div>
        </div>

        {/* Navigation Test Buttons */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            🧪 Test Navigation
          </h2>
          <p className="text-gray-600 mb-4">
            Click these buttons to test different routes and see how the
            breadcrumb updates:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {navigationExamples.map((example, index) => (
              <Button
                key={index}
                label={example.label}
                icon="pi pi-arrow-right"
                className="p-button-outlined"
                onClick={() => {
                  setCurrentPath(example.path);
                  // Simulate route change for demo
                  console.log(`Navigating to: ${example.path}`);
                }}
              />
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            💡 BreadCrumb Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">✅ Do:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use router.push() for navigation</li>
                <li>• Keep labels short and clear</li>
                <li>• Use icons for visual hierarchy</li>
                <li>• Make each level clickable</li>
                <li>• Update breadcrumb with route changes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                ❌ Don&apos;t:
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Use external URLs in navigation</li>
                <li>• Make current page clickable</li>
                <li>• Show too many levels (max 4-5)</li>
                <li>• Use long labels that wrap</li>
                <li>• Forget to handle edge cases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
