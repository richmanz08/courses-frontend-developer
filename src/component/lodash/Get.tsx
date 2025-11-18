"use client";
import { get } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";
import { Card } from "primereact/card";
import { Message } from "primereact/message";

export const GetLodashExample = () => {
  // Example: Nested object data
  const user = {
    id: 1,
    name: "John Doe",
    profile: {
      age: 30,
      email: "john@example.com",
      address: {
        street: "123 Main St",
        city: "Bangkok",
        country: "Thailand",
        zipCode: "10110",
      },
    },
    settings: {
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      privacy: {
        showEmail: false,
        showPhone: true,
      },
    },
  };

  // Example: Array with objects
  const team = [
    {
      name: "Alice",
      role: "Developer",
      skills: ["React", "TypeScript", "Node.js"],
    },
    {
      name: "Bob",
      role: "Designer",
      skills: ["Figma", "Photoshop"],
    },
  ];

  // Using lodash get - ดึงข้อมูล nested object อย่างปลอดภัย
  const userName = get(user, "name");
  const userAge = get(user, "profile.age");
  const userCity = get(user, "profile.address.city");
  const emailNotification = get(user, "settings.notifications.email");

  // กรณีที่ path ไม่มีอยู่จริง - จะ return default value
  const phoneNumber = get(user, "profile.phone", "N/A");
  const userCountry = get(user, "profile.address.country", "Unknown");

  // ดึงข้อมูลจาก array
  const firstPersonName = get(team, "[0].name");
  const firstPersonFirstSkill = get(team, "[0].skills[0]");
  const secondPersonRole = get(team, "[1].role");

  // กรณี undefined - ใช้ default value
  const nonExistentValue = get(
    user,
    "profile.socialMedia.twitter",
    "Not provided"
  );

  console.log("User Name:", userName);
  console.log("User City:", userCity);
  console.log("Phone (with default):", phoneNumber);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Get Example
      </h2>

      <Message
        severity="info"
        text="get() ใช้สำหรับดึงค่าจาก nested object อย่างปลอดภัย โดยสามารถกำหนด default value ได้ถ้า path ไม่มีอยู่จริง"
        className="mb-4"
      />

      <TerminalUI fileName="Get.tsx" name="Lodash Get Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">get</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&apos;lodash&apos;</span>;{"\n\n"}
            <span className="text-gray-500">
              {`// Nested object structure`}
            </span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">user</span> = {"{\n"}
            {"  "}
            <span className="text-blue-300">id</span>:{" "}
            <span className="text-orange-400">1</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">name</span>:{" "}
            <span className="text-green-400">&apos;John Doe&apos;</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">profile</span>: {"{\n"}
            {"    "}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">30</span>,{"\n"}
            {"    "}
            <span className="text-blue-300">address</span>: {"{\n"}
            {"      "}
            <span className="text-blue-300">city</span>:{" "}
            <span className="text-green-400">&apos;Bangkok&apos;</span>,{"\n"}
            {"      "}
            <span className="text-blue-300">country</span>:{" "}
            <span className="text-green-400">&apos;Thailand&apos;</span>
            {"\n    }\n  }\n};\n\n"}
            <span className="text-gray-500">
              {`// ✅ Safe access to nested properties`}
            </span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">city</span> = {`\n  `}
            <span className="text-yellow-300">get</span>(
            <span className="text-blue-300">user</span>,{" "}
            <span className="text-green-400">
              &apos;profile.address.city&apos;
            </span>
            );{"\n"}
            <span className="text-gray-500">{`// Output: 'Bangkok'`}</span>
            {"\n\n"}
            <span className="text-gray-500">{`// ✅ With default value`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">phone</span> = {`\n  `}
            <span className="text-yellow-300">get</span>(
            <span className="text-blue-300">user</span>,{" "}
            <span className="text-green-400">&apos;profile.phone&apos;</span>,{" "}
            <span className="text-green-400">&apos;N/A&apos;</span>
            );{"\n"}
            <span className="text-gray-500">
              {`// Output: 'N/A' (path doesn't exist)`}
            </span>
            {"\n\n"}
            <span className="text-gray-500">{`// ✅ Array access`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">firstSkill</span> = {`\n  `}
            <span className="text-yellow-300">get</span>(
            <span className="text-blue-300">team</span>,{" "}
            <span className="text-green-400">&apos;[0].skills[0]&apos;</span>
            );
          </code>
        </pre>
      </TerminalUI>

      {/* Results Display */}
      <div className="mt-6 space-y-4">
        <Card title="📦 ดึงข้อมูล Object พื้นฐาน" className="bg-blue-50">
          <div className="space-y-2">
            <div className="p-3 bg-white rounded border border-blue-200">
              <span className="font-mono text-sm text-gray-600">
                get(user, &apos;name&apos;)
              </span>
              <div className="mt-1 font-bold text-blue-600">{userName}</div>
            </div>
            <div className="p-3 bg-white rounded border border-blue-200">
              <span className="font-mono text-sm text-gray-600">
                get(user, &apos;profile.age&apos;)
              </span>
              <div className="mt-1 font-bold text-blue-600">{userAge}</div>
            </div>
          </div>
        </Card>

        <Card
          title="🏢 ดึงข้อมูล Nested Object (3 ระดับ)"
          className="bg-green-50"
        >
          <div className="space-y-2">
            <div className="p-3 bg-white rounded border border-green-200">
              <span className="font-mono text-sm text-gray-600">
                get(user, &apos;profile.address.city&apos;)
              </span>
              <div className="mt-1 font-bold text-green-600">{userCity}</div>
            </div>
            <div className="p-3 bg-white rounded border border-green-200">
              <span className="font-mono text-sm text-gray-600">
                get(user, &apos;settings.notifications.email&apos;)
              </span>
              <div className="mt-1 font-bold text-green-600">
                {emailNotification ? "✅ Enabled" : "❌ Disabled"}
              </div>
            </div>
          </div>
        </Card>

        <Card
          title="🛡️ ใช้ Default Value (Path ไม่มีอยู่จริง)"
          className="bg-yellow-50"
        >
          <div className="space-y-2">
            <div className="p-3 bg-white rounded border border-yellow-200">
              <span className="font-mono text-sm text-gray-600">
                get(user, &apos;profile.phone&apos;,{" "}
                <span className="text-yellow-600">&apos;N/A&apos;</span>)
              </span>
              <div className="mt-1 font-bold text-yellow-600">
                {phoneNumber}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ⚠️ Path ไม่มีอยู่จริง → ใช้ default value
              </div>
            </div>
            <div className="p-3 bg-white rounded border border-yellow-200">
              <span className="font-mono text-sm text-gray-600">
                get(user, &apos;profile.socialMedia.twitter&apos;,{" "}
                <span className="text-yellow-600">
                  &apos;Not provided&apos;
                </span>
                )
              </span>
              <div className="mt-1 font-bold text-yellow-600">
                {nonExistentValue}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ⚠️ Nested path ไม่มี → ใช้ default value
              </div>
            </div>
          </div>
        </Card>

        <Card title="📚 ดึงข้อมูลจาก Array" className="bg-purple-50">
          <div className="space-y-2">
            <div className="p-3 bg-white rounded border border-purple-200">
              <span className="font-mono text-sm text-gray-600">
                get(team, &apos;[0].name&apos;)
              </span>
              <div className="mt-1 font-bold text-purple-600">
                {firstPersonName}
              </div>
            </div>
            <div className="p-3 bg-white rounded border border-purple-200">
              <span className="font-mono text-sm text-gray-600">
                get(team, &apos;[0].skills[0]&apos;)
              </span>
              <div className="mt-1 font-bold text-purple-600">
                {firstPersonFirstSkill}
              </div>
            </div>
            <div className="p-3 bg-white rounded border border-purple-200">
              <span className="font-mono text-sm text-gray-600">
                get(team, &apos;[1].role&apos;)
              </span>
              <div className="mt-1 font-bold text-purple-600">
                {secondPersonRole}
              </div>
            </div>
          </div>
        </Card>

        {/* Comparison */}
        <Card
          title="⚖️ เปรียบเทียบ: get() vs การเข้าถึงปกติ"
          className="bg-red-50"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded border-2 border-red-300">
              <h4 className="font-bold text-red-600 mb-3">
                ❌ วิธีปกติ (อันตราย)
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div className="p-2 bg-gray-100 rounded">
                  <code className="text-red-600">
                    user.profile.address.city
                  </code>
                  <div className="text-xs text-gray-600 mt-1">
                    ✅ ถ้า path มีอยู่จริง
                  </div>
                </div>
                <div className="p-2 bg-red-100 rounded">
                  <code className="text-red-600">
                    user.profile.phone.number
                  </code>
                  <div className="text-xs text-red-600 mt-1 font-bold">
                    💥 ERROR! Cannot read &apos;number&apos; of undefined
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded border-2 border-green-300">
              <h4 className="font-bold text-green-600 mb-3">
                ✅ get() (ปลอดภัย)
              </h4>
              <div className="space-y-2 text-sm font-mono">
                <div className="p-2 bg-gray-100 rounded">
                  <code className="text-green-600">
                    get(user, &apos;profile.address.city&apos;)
                  </code>
                  <div className="text-xs text-gray-600 mt-1">
                    ✅ Return: &apos;Bangkok&apos;
                  </div>
                </div>
                <div className="p-2 bg-green-100 rounded">
                  <code className="text-green-600">
                    get(user, &apos;profile.phone.number&apos;, &apos;N/A&apos;)
                  </code>
                  <div className="text-xs text-green-600 mt-1 font-bold">
                    ✅ Return: &apos;N/A&apos; (ไม่ error!)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Use Cases */}
        <Card
          title="💡 Use Cases - เมื่อไหร่ควรใช้ get()"
          className="bg-indigo-50"
        >
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <h5 className="font-bold text-indigo-700">API Response</h5>
                <p className="text-sm text-gray-700">
                  เมื่อข้อมูลจาก API อาจไม่สมบูรณ์หรือบางฟิลด์อาจไม่มี
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
                  get(apiData, &apos;user.profile.avatar&apos;,
                  &apos;default.jpg&apos;)
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">⚙️</span>
              <div>
                <h5 className="font-bold text-indigo-700">Config / Settings</h5>
                <p className="text-sm text-gray-700">
                  อ่านค่า config ที่ซ้อนกันหลายชั้นพร้อม fallback value
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
                  get(config, &apos;app.features.darkMode&apos;, false)
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <h5 className="font-bold text-indigo-700">Dynamic Data</h5>
                <p className="text-sm text-gray-700">
                  เมื่อ path เป็น dynamic หรือมาจาก user input
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
                  get(data, userInputPath, &apos;default&apos;)
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <h5 className="font-bold text-indigo-700">
                  TypeScript/JavaScript Safety
                </h5>
                <p className="text-sm text-gray-700">
                  ป้องกัน runtime error จาก undefined/null
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded mt-1 inline-block">
                  get(obj, &apos;a.b.c.d.e.f&apos;, null)
                </code>
              </div>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <Card title="📚 สรุป get()" className="bg-gray-50">
          <div className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-green-600 mb-2">✅ ข้อดี</h4>
                <ul className="space-y-1 text-sm">
                  <li>✓ ปลอดภัย ไม่เกิด error แม้ path ไม่มี</li>
                  <li>✓ รองรับ default value</li>
                  <li>✓ รองรับ nested object ลึกกี่ชั้นก็ได้</li>
                  <li>✓ รองรับทั้ง object และ array</li>
                  <li>✓ Code อ่านง่าย สะอาด</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-red-600 mb-2">❌ ข้อควรระวัง</h4>
                <ul className="space-y-1 text-sm">
                  <li>⚠️ ต้อง import lodash (เพิ่ม bundle size)</li>
                  <li>⚠️ TypeScript อาจไม่ infer type ให้อัตโนมัติ</li>
                  <li>⚠️ ช้ากว่าการเข้าถึงตรงเล็กน้อย (ยอมรับได้)</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-100 rounded">
              <h4 className="font-bold text-blue-800 mb-2">
                🎯 เมื่อไหร่ควรใช้?
              </h4>
              <p className="text-sm text-blue-900">
                ใช้เมื่อไม่แน่ใจว่า path จะมีอยู่จริง เช่น ข้อมูลจาก API, user
                input, หรือ optional fields ใน object
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
