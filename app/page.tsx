"use client";
import { TerminalUI } from "@/src/component/ui/TerminalUI";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showWhyModal, setShowWhyModal] = useState(false);

  const courses = [
    {
      title: "TypeScript Basics",
      description: "Learn TypeScript fundamentals with practical examples",
      icon: "📘",
      path: "/typescript-basic",
      color: "bg-blue-500",
    },
    {
      title: "Next Router",
      description: "Master Next App Router and navigation patterns",
      icon: "🚀",
      path: "/next-router",
      color: "bg-green-500",
    },
    {
      title: "React Hooks",
      description: "Understand React Hooks with hands-on demonstrations",
      icon: "⚛️",
      path: "/react-hook",
      color: "bg-red-500",
    },
    {
      title: "Lodash",
      description: "Utilize Lodash for efficient data manipulation",
      icon: "📦",
      path: "/lodash",
      color: "bg-purple-500",
    },
    {
      title: "Browser Storage",
      description: "Work with LocalStorage and SessionStorage in web apps",
      icon: "💾",
      path: "/browser-storage",
      color: "bg-orange-500",
    },
    {
      title: "Component Decomposition",
      description: "Learn how to break down UI into reusable components",
      icon: "🧩",
      path: "/component-decomposition",
      color: "bg-teal-500",
    },
    {
      title: "Component and Props",
      description:
        "Understand React components and how to pass data with props",
      icon: "👤",
      path: "/component-and-props",
      color: "bg-pink-500",
    },
    {
      title: "Provider & Context",
      description: "Manage global state using React Context and Providers",
      icon: "🌐",
      path: "/context-provider",
      color: "bg-indigo-500",
    },
    {
      title: "Tailwind CSS & Advanced Styling",
      description:
        "Style your applications with Tailwind CSS and advanced techniques",
      icon: "🎨",
      path: "/tailwind-css",
      color: "bg-teal-500",
    },
    {
      title: "Image optimization",
      description: "Optimize images for faster loading and better performance",
      icon: "🖼️",
      path: "/image-optimization",
      color: "bg-pink-500",
    },
    {
      // * ฝึกการวิเคราะห์และออกแบบ response data จาก UI ให้กับ back-end
      title: "Design API Response",
      description:
        "Analyze UI requirements and design effective API response structures",
      icon: "🛠️",
      path: "/design-api-response",
      color: "bg-indigo-500",
    },
    {
      // * ทำความเข้าใจ App Router และ API Routes  (Next Server)
      title: "Next.js App Router & API Routes",
      description: "Understand Next.js App Router and how to create API Routes",
      icon: "🛣️",
      path: "/next-app-router",
      color: "bg-green-500",
    },
    {
      // * เรียนรู้การใช้ React Query (@tanstack/react-query) เพื่อ Caching และ Revalidation Data
      title: "React Query for Data Caching",
      description:
        "Learn to use React Query for efficient data caching and revalidation",
      icon: "🔄",
      path: "/react-query",
      color: "bg-purple-500",
    },
    {
      //* แนวคิดการแยก logic ของ code ที่เกี่ยวกับการ business logic ด้วย Custom Hooks
      title: "Custom Hooks for Business Logic",
      description:
        "Learn to separate business logic using Custom Hooks in React",
      icon: "🪝",
      path: "/custom-hooks",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ">
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12 w-full flex flex-col items-center">
          <div className="flex justify-center mb-6">
            <Image
              className="light:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={36}
              priority
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Frontend Developer Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Learn TypeScript and Next.js with interactive examples and practical
            implementations
          </p>

          <div className="max-w-2xl">
            <TerminalUI
              fileName="npx-create-next-app.txt"
              name="npx create-next-app"
            >
              <div className="text-sm pt-4 min-h-[100px]">
                <span className="text-green-600 font-mono text-left w-full">
                  wearecpmatch@MacBook-Pro-2 ~ %
                </span>
                <span className="text-pink-600 font-mono ml-4 text-left w-full">
                  npx create-next-app@latest
                </span>
              </div>
            </TerminalUI>
          </div>

          {/* Why Button */}
          <div className="mt-6">
            <Button
              label="🤔 ทำไมต้องเป็น Next กับ React"
              icon="pi pi-question-circle"
              className="p-button-rounded p-button-info p-button-lg"
              onClick={() => setShowWhyModal(true)}
            />
          </div>
        </div>

        {/* Why Technologies Modal */}
        <Dialog
          header={
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤔</span>
              <span>ทำไมต้องเรียน Next.js, TypeScript และ React?</span>
            </div>
          }
          visible={showWhyModal}
          style={{ width: "90vw", maxWidth: "1200px" }}
          onHide={() => setShowWhyModal(false)}
          dismissableMask
          draggable={false}
        >
          <div className="p-4">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* React */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4 text-center">⚛️</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  React
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Component-Based:</strong> สร้าง UI แบบแยกส่วน
                      นำกลับมาใช้ได้
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Virtual DOM:</strong> อัพเดท UI
                      ได้เร็วและมีประสิทธิภาพ
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Huge Ecosystem:</strong> Library และ Tools มากมาย
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Job Market:</strong> ตำแหน่งงานเยอะที่สุดในตลาด
                    </span>
                  </li>
                </ul>
              </div>

              {/* TypeScript */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4 text-center">📘</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                  TypeScript
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Type Safety:</strong> จับ error ก่อน runtime
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>IntelliSense:</strong> Autocomplete
                      ช่วยเขียนโค้ดเร็วขึ้น
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Refactoring:</strong> แก้โค้ดได้ปลอดภัย มั่นใจขึ้น
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Industry Standard:</strong>{" "}
                      บริษัทใหญ่ใช้กันแทบทั้งหมด
                    </span>
                  </li>
                </ul>
              </div>

              {/* Next.js */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4 text-center">🚀</div>
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">
                  Next.js
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>SSR & SSG:</strong> SEO ดี โหลดเร็ว Performance
                      สูง
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>App Router:</strong> Routing ทันสมัย ใช้งานง่าย
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Full-Stack:</strong> เขียน API Routes
                      ได้ในโปรเจคเดียว
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>
                      <strong>Production Ready:</strong> Deploy ง่าย
                      ใช้งานจริงได้เลย
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Summary */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    พลังของการผสมผสานทั้ง 3 เทคโนโลยี
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    เมื่อใช้ <strong className="text-blue-600">React</strong> +{" "}
                    <strong className="text-blue-700">TypeScript</strong> +{" "}
                    <strong className="text-green-600">Next.js</strong> ร่วมกัน
                    คุณจะได้{" "}
                    <strong>
                      Web Application ที่มี Type Safety, Component-Based
                      Architecture, SEO-Friendly, และ Performance สูง
                    </strong>{" "}
                    - ซึ่งเป็นสิ่งที่บริษัทชั้นนำทั่วโลกต้องการในปัจจุบัน! 🌟
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-blue-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600">
                  🏢 Top Companies
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Facebook, Netflix, Airbnb
                </div>
              </div>
              <div className="bg-purple-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600">
                  📈 High Demand
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  เงินเดือนสูง ตำแหน่งงานเยอะ
                </div>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600">
                  🚀 Future Proof
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  เทคโนโลยีที่ใช้ในอนาคต
                </div>
              </div>
            </div>
          </div>
        </Dialog>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{course.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {course.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
              <div className="text-center">
                <Button
                  label="Start Learning"
                  icon="pi pi-arrow-right"
                  className={`p-button-raised ${course.color}`}
                  onClick={() => router.push(course.path)}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
