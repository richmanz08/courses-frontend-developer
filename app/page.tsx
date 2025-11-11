"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Home() {
  const router = useRouter();

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn TypeScript and Next.js with interactive examples and practical
            implementations
          </p>
        </div>

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

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Practical Examples
              </h3>
              <p className="text-gray-600">
                Hands-on code examples with interactive demonstrations
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Real Implementation
              </h3>
              <p className="text-gray-600">
                Working components and navigation patterns
              </p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Best Practices
              </h3>
              <p className="text-gray-600">
                Industry standards and modern development approaches
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
