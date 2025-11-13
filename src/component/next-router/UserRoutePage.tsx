import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { TerminalUI } from "../ui/TerminalUI";
import { Card } from "primereact/card";
import { Message } from "primereact/message";

interface UserRoutePageExampleProps {
  userID: string;
}
export const UserRoutePageExample = ({ userID }: UserRoutePageExampleProps) => {
  const router = useRouter();
  const user = [
    { userID: "12345", name: "John Doe", role: "Admin" },
    { userID: "54321", name: "Jane Snow", role: "User" },
    { userID: "9", name: "Michael Scott", role: "Manager" },
    { userID: "8", name: "Daemon Targaryen", role: "User" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <i className="pi pi-user text-3xl text-blue-600"></i>
          <h1 className="text-3xl font-bold text-gray-800">
            User Profile Page
          </h1>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-600">Current User ID:</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
            {userID}
          </span>
        </div>
        <Message
          severity="info"
          text="หน้านี้แสดงตัวอย่างการใช้งาน Dynamic Route [id] และเปรียบเทียบ router.push() กับ router.replace()"
          className="mb-4"
        />
      </div>

      {/* router.replace() Explanation */}
      <Card className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔄</span>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              router.replace() - การนำทางแบบแทนที่
            </h2>
            <p className="text-gray-600 text-sm">
              ใช้เพื่อนำทางโดยแทนที่ history ปัจจุบัน ไม่สามารถกดปุ่ม Back
              กลับมาหน้าเดิมได้
            </p>
          </div>
        </div>

        <TerminalUI fileName="UserRoutePage.tsx" name="Use Router Replace">
          <div className="space-y-4">
            {/* Code Example */}
            <div>
              <h3 className="text-green-400 font-semibold mb-2">
                📝 Code Example:
              </h3>
              <div className="text-sm">
                <div className="mb-3">
                  <span className="text-pink-400">import</span>{" "}
                  <span className="text-gray-400">{"{"}</span>{" "}
                  <span className="text-blue-300">useRouter</span>{" "}
                  <span className="text-gray-400">{"}"}</span>{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-orange-300">
                    &quot;next/navigation&quot;
                  </span>
                  <span className="text-gray-400">;</span>
                </div>

                <div className="mb-3">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-blue-300">router</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-yellow-400">useRouter</span>
                  <span className="text-gray-400">();</span>
                </div>

                <div className="mb-2">
                  <span className="text-gray-500">
                    {"//"} Navigate และแทนที่ history
                  </span>
                </div>
                <div>
                  <span className="text-blue-300">router</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-yellow-400">replace</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-orange-300">
                    &quot;/next-router/user/54321&quot;
                  </span>
                  <span className="text-gray-400">);</span>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-yellow-400 font-semibold mb-2">💡 อธิบาย:</h3>
              <div className="text-sm text-gray-300 space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>แทนที่ URL ปัจจุบันด้วย URL ใหม่</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>ไม่เพิ่ม entry ใหม่ใน browser history</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <span>กดปุ่ม Back จะกลับไปหน้าก่อนหน้าที่ถูกแทนที่</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-blue-400">📌</span>
                  <span>เหมาะสำหรับ: Login redirect, Form submission</span>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-cyan-400 font-semibold mb-2">
                🔍 เปรียบเทียบ:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-blue-900/30 border border-blue-500/30 rounded p-3">
                  <div className="text-blue-400 font-semibold mb-1">
                    router.push()
                  </div>
                  <div className="text-gray-300">• เพิ่ม history entry</div>
                  <div className="text-gray-300">• กด Back กลับมาได้</div>
                  <div className="text-gray-300">• ใช้สำหรับการนำทางทั่วไป</div>
                </div>
                <div className="bg-orange-900/30 border border-orange-500/30 rounded p-3">
                  <div className="text-orange-400 font-semibold mb-1">
                    router.replace()
                  </div>
                  <div className="text-gray-300">• แทนที่ history entry</div>
                  <div className="text-gray-300">• กด Back ข้ามหน้านี้ไป</div>
                  <div className="text-gray-300">
                    • ใช้เมื่อไม่ต้องการให้กลับมา
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TerminalUI>

        {/* Action Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mt-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">
                🚀 ทดลองใช้งาน!
              </h3>
              <p className="text-sm text-gray-600">
                คลิกปุ่มเพื่อนำทางไปยังหน้า User ID:{" "}
                <code className="bg-white px-2 py-1 rounded text-blue-600 font-semibold">
                  54321
                </code>{" "}
                และสังเกตว่าปุ่ม Back ของเบราว์เซอร์จะไม่กลับมาหน้านี้
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                label="Replace to User 54321"
                icon="pi pi-arrow-right"
                severity="warning"
                onClick={() => router.replace("/next-router/user/54321")}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Interactive Table Section */}
      <Card className="mb-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            📊 ทดสอบการนำทางแบบต่างๆ
          </h2>
          <p className="text-gray-600 text-sm">
            ลองคลิกปุ่มต่างๆ ในตารางและสังเกตความแตกต่างระหว่าง push() และ
            replace()
          </p>
        </div>

        <DataTable
          value={user}
          tableStyle={{ minWidth: "50rem" }}
          className="border rounded"
          stripedRows
        >
          <Column field="userID" header="User ID" className="font-semibold" />
          <Column field="name" header="Name" />
          <Column
            field="role"
            header="Role"
            body={(rowData) => (
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  rowData.role === "Admin"
                    ? "bg-red-100 text-red-800"
                    : rowData.role === "Manager"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {rowData.role}
              </span>
            )}
          />
          <Column
            field="userID"
            header="push() 📝"
            body={function ({ userID }) {
              return (
                <Button
                  label="Try push"
                  size="small"
                  outlined
                  onClick={() => {
                    router.push(`/next-router/user/${userID}`);
                  }}
                  tooltip="เพิ่ม history - กดกลับมาได้"
                  tooltipOptions={{ position: "top" }}
                />
              );
            }}
          />
          <Column
            field="userID"
            header="replace() 🔄"
            body={function ({ userID }) {
              return (
                <Button
                  severity="warning"
                  label="Try replace"
                  size="small"
                  outlined
                  onClick={() => {
                    router.replace(`/next-router/user/${userID}`);
                  }}
                  tooltip="แทนที่ history - กดกลับข้ามหน้านี้ไป"
                  tooltipOptions={{ position: "top" }}
                />
              );
            }}
          />
          <Column
            field="userID"
            header="Detail Page 📄"
            body={function ({ userID }) {
              return (
                <Button
                  severity="info"
                  label="Go to Detail"
                  size="small"
                  onClick={() => {
                    router.push(`/next-router/user/${userID}/detail`);
                  }}
                  tooltip="ไปหน้า Detail (Nested Route)"
                  tooltipOptions={{ position: "top" }}
                />
              );
            }}
          />
        </DataTable>
      </Card>

      {/* Tips Section */}
      <Card>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <i className="pi pi-lightbulb text-yellow-500"></i>
            💡 เคล็ดลับการใช้งาน
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h4 className="font-semibold text-green-800 mb-2">
                ✅ ควรใช้ router.replace()
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>หลัง Login สำเร็จ (ไม่ให้กลับมาหน้า Login)</li>
                <li>หลังส่ง Form สำเร็จ (ป้องกัน duplicate submission)</li>
                <li>Redirect จากหน้า Error</li>
                <li>เปลี่ยน query parameters โดยไม่เพิ่ม history</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <h4 className="font-semibold text-blue-800 mb-2">
                📌 ควรใช้ router.push()
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>การนำทางทั่วไป (คลิกลิงก์, เมนู)</li>
                <li>ต้องการให้ผู้ใช้กดปุ่ม Back ได้</li>
                <li>สร้าง navigation history ปกติ</li>
                <li>Breadcrumb navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
