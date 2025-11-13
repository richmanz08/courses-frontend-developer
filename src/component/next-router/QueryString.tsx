import { useRouter, useSearchParams } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { TabPanel, TabView } from "primereact/tabview";
import { useMemo } from "react";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { TerminalUI } from "../ui/TerminalUI";
import { Tag } from "primereact/tag";

interface QueryStringExampleComponentProps {
  userID: string;
}
export const QueryStringExampleComponent = ({
  userID,
}: QueryStringExampleComponentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log(searchParams, {
    searchParams: Array.from(searchParams.entries()),
  });

  // Tab mapping for query strings
  const tabMapping = useMemo(
    () => [
      { key: "info", label: "Information" },
      { key: "carlist", label: "Car list" },
    ],
    []
  );

  // Mock car data
  const cars = useMemo(
    () => [
      {
        id: "CAR001",
        make: "Toyota",
        model: "Camry",
        year: 2022,
        color: "White",
        price: 1200000,
        mileage: 15000,
      },
      {
        id: "CAR002",
        make: "Honda",
        model: "Civic",
        year: 2021,
        color: "Black",
        price: 950000,
        mileage: 25000,
      },
      {
        id: "CAR003",
        make: "BMW",
        model: "X3",
        year: 2023,
        color: "Silver",
        price: 2800000,
        mileage: 8000,
      },
      {
        id: "CAR004",
        make: "Mercedes",
        model: "C-Class",
        year: 2022,
        color: "Blue",
        price: 2500000,
        mileage: 12000,
      },
      {
        id: "CAR005",
        make: "Audi",
        model: "A4",
        year: 2021,
        color: "Red",
        price: 2200000,
        mileage: 18000,
      },
      {
        id: "CAR006",
        make: "Ford",
        model: "F-150",
        year: 2020,
        color: "Gray",
        price: 1800000,
        mileage: 35000,
      },
    ],
    []
  );

  // Get active index from URL or default to 1
  const activeIndex = useMemo(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      const tabIndex = tabMapping.findIndex((tab) => tab.key === tabParam);
      return tabIndex !== -1 ? tabIndex : 1;
    }
    return 1;
  }, [searchParams, tabMapping]);

  // Pagination state from URL
  const currentPage = useMemo(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? Math.max(0, parseInt(pageParam) - 1) : 0;
  }, [searchParams]);

  const rowsPerPage = 3;

  // Get paginated cars
  const paginatedCars = useMemo(() => {
    const startIndex = currentPage * rowsPerPage;
    return cars.slice(startIndex, startIndex + rowsPerPage);
  }, [cars, currentPage]);

  // Handle pagination change
  const onPageChange = (event: { page: number; first: number }) => {
    const newPage = event.page + 1; // Convert 0-based to 1-based

    // Create new URLSearchParams to preserve existing query parameters
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());

    router.replace(`?${params.toString()}`);
  };

  // Tab change handler
  const handleTabChange = (newIndex: number) => {
    const tabKey = tabMapping[newIndex]?.key || "info";
    console.log({ newIndex, tabKey });

    // Create new URLSearchParams to preserve existing query parameters
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabKey);
    // Reset to page 1 when changing tabs
    params.set("page", "1");
    router.replace(`?${params.toString()}`);
  };

  // Sample data for tabs
  const dataByTab: Record<
    string,
    Array<{
      id: string | number;
      name: string;
      category: string;
      description: string;
    }>
  > = {
    info: [
      {
        id: 1,
        name: "Personal Info",
        category: "Premium",
        description: "User profile information",
      },
      {
        id: 2,
        name: "Contact Details",
        category: "Standard",
        description: "Email and phone numbers",
      },
      {
        id: 3,
        name: "Address",
        category: "Basic",
        description: "Shipping and billing addresses",
      },
      {
        id: 4,
        name: "Preferences",
        category: "Standard",
        description: "User preferences and settings",
      },
      {
        id: 5,
        name: "Activity Log",
        category: "Premium",
        description: "Recent user activities",
      },
    ],
    carlist: paginatedCars.map((car) => ({
      id: car.id,
      name: `${car.make} ${car.model}`,
      category:
        car.price > 1000000
          ? "Premium"
          : car.price > 500000
          ? "Standard"
          : "Basic",
      description: `${car.year} ${
        car.color
      } - ${car.mileage.toLocaleString()} km`,
    })),
  };

  // Pagination values for the current tab
  const first = currentPage * rowsPerPage;
  const rows = rowsPerPage;
  const totalRecords = dataByTab[tabMapping[activeIndex]?.key]?.length || 0;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <i className="pi pi-link text-3xl text-blue-600"></i>
          <h1 className="text-3xl font-bold text-gray-800">
            Query String Management
          </h1>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-600">User ID:</span>
          <Tag value={userID} severity="info" />
          <span className="text-gray-600 ml-4">Current Tab:</span>
          <Tag value={tabMapping[activeIndex]?.key} severity="success" />
          <span className="text-gray-600 ml-4">Page:</span>
          <Tag value={`${currentPage + 1}`} severity="warning" />
        </div>
        <Message
          severity="info"
          text="หน้านี้แสดงการจัดการ Query String ด้วย URLSearchParams เพื่อรักษาสถานะของ Tab และ Pagination ใน URL"
          className="mb-4"
        />

        {/* Current Query String Display */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <i className="pi pi-info-circle text-blue-600"></i>
            <span className="font-semibold text-gray-800">
              Current Query String:
            </span>
          </div>
          <code className="bg-white px-4 py-2 rounded border border-blue-300 text-blue-700 font-mono text-sm block">
            {searchParams.toString() || "(empty - ยังไม่มี query parameters)"}
          </code>
        </div>
      </div>

      {/* URLSearchParams Explanation */}
      <Card className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔗</span>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              URLSearchParams - จัดการ Query String อย่างมืออาชีพ
            </h2>
            <p className="text-gray-600 text-sm">
              API ที่ใช้จัดการ query parameters โดยไม่ทำให้ parameter อื่นๆ
              หายไป
            </p>
          </div>
        </div>

        <TerminalUI fileName="query-string.tsx" name="URLSearchParams">
          <div className="space-y-4">
            {/* Code Example */}
            <div>
              <h3 className="text-green-400 font-semibold mb-2">
                📝 Code Example:
              </h3>
              <div className="text-sm space-y-3">
                {/* Import */}
                <div>
                  <span className="text-pink-400">import</span>{" "}
                  <span className="text-gray-400">{"{"}</span>{" "}
                  <span className="text-blue-300">useRouter</span>
                  <span className="text-gray-400">,</span>{" "}
                  <span className="text-blue-300">useSearchParams</span>{" "}
                  <span className="text-gray-400">{"}"}</span>{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-orange-300">
                    &quot;next/navigation&quot;
                  </span>
                  <span className="text-gray-400">;</span>
                </div>

                {/* Initialize */}
                <div className="pt-2">
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-300">router</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-yellow-400">useRouter</span>
                    <span className="text-gray-400">();</span>
                  </div>
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-300">searchParams</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-yellow-400">useSearchParams</span>
                    <span className="text-gray-400">();</span>
                  </div>
                </div>

                {/* Preserve Query Parameters */}
                <div className="pt-2">
                  <div className="text-gray-500 mb-1">
                    {"//"} 1. สร้าง URLSearchParams จาก query string ปัจจุบัน
                  </div>
                  <div>
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-blue-300">params</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-pink-400">new</span>{" "}
                    <span className="text-yellow-300">URLSearchParams</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-blue-300">searchParams</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-yellow-400">toString</span>
                    <span className="text-gray-400">());</span>
                  </div>
                </div>

                {/* Set Parameter */}
                <div className="pt-2">
                  <div className="text-gray-500 mb-1">
                    {"//"} 2. เพิ่มหรืออัพเดท parameter (จะไม่ลบ parameter อื่น)
                  </div>
                  <div>
                    <span className="text-blue-300">params</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-yellow-400">set</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-300">&quot;page&quot;</span>
                    <span className="text-gray-400">,</span>{" "}
                    <span className="text-blue-300">newPage</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-yellow-400">toString</span>
                    <span className="text-gray-400">());</span>
                  </div>
                </div>

                {/* Navigate */}
                <div className="pt-2">
                  <div className="text-gray-500 mb-1">
                    {"//"} 3. Navigate พร้อม query string ที่อัพเดทแล้ว
                  </div>
                  <div>
                    <span className="text-blue-300">router</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-yellow-400">replace</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-orange-300">{"`?${"}</span>
                    <span className="text-blue-300">params</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-yellow-400">toString</span>
                    <span className="text-gray-400">()</span>
                    <span className="text-orange-300">{"}`"}</span>
                    <span className="text-gray-400">);</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-yellow-400 font-semibold mb-2">
                ✨ ประโยชน์ของ URLSearchParams:
              </h3>
              <div className="text-sm text-gray-300 space-y-2">
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <div>
                    <span className="font-semibold">
                      Preserve Existing Queries:
                    </span>{" "}
                    <span>ไม่สูญเสีย query parameters อื่นๆ ที่มีอยู่แล้ว</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <div>
                    <span className="font-semibold">Easy Manipulation:</span>{" "}
                    <span>ใช้ .set(), .get(), .delete(), .has() ได้ง่าย</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <div>
                    <span className="font-semibold">Auto URL Encoding:</span>{" "}
                    <span>จัดการ URL encoding อัตโนมัติ (ปลอดภัย)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-green-400">✓</span>
                  <div>
                    <span className="font-semibold">Browser Native:</span>{" "}
                    <span>รองรับทุก modern browser ไม่ต้องติดตั้ง library</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-cyan-400 font-semibold mb-2">
                🎯 Use Cases:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-blue-900/30 border border-blue-500/30 rounded p-3">
                  <div className="text-blue-400 font-semibold mb-1">
                    📄 Pagination
                  </div>
                  <div className="text-gray-300">
                    เก็บหน้าปัจจุบัน สามารถ refresh ได้
                  </div>
                </div>
                <div className="bg-purple-900/30 border border-purple-500/30 rounded p-3">
                  <div className="text-purple-400 font-semibold mb-1">
                    🔍 Filters
                  </div>
                  <div className="text-gray-300">
                    เก็บค่า filter และ sort criteria
                  </div>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded p-3">
                  <div className="text-green-400 font-semibold mb-1">
                    📑 Tab State
                  </div>
                  <div className="text-gray-300">
                    จำ tab ที่เปิดอยู่ เพื่อแชร์ลิงก์
                  </div>
                </div>
                <div className="bg-orange-900/30 border border-orange-500/30 rounded p-3">
                  <div className="text-orange-400 font-semibold mb-1">
                    🔎 Search
                  </div>
                  <div className="text-gray-300">
                    เก็บคำค้นหา ให้กด Back ได้
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="border-t border-gray-700 pt-4">
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3">
                <div className="flex gap-2 items-start">
                  <i className="pi pi-lightbulb text-yellow-400 mt-0.5"></i>
                  <div className="text-sm text-gray-300">
                    <span className="font-semibold text-yellow-400">
                      💡 Tip:
                    </span>{" "}
                    ลองเปลี่ยน tab และ pagination แล้ว{" "}
                    <span className="text-yellow-300">refresh หน้าเว็บ</span> -
                    ระบบจะจำสถานะได้ผ่าน query string
                    และสามารถแชร์ลิงก์ไปยังหน้าเดียวกันได้!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TerminalUI>
      </Card>

      {/* Interactive Demo Section */}
      <Card className="mb-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <i className="pi pi-play-circle text-blue-600"></i>
            🚀 ทดลองใช้งาน - Tab & Pagination
          </h2>
          <p className="text-gray-600 text-sm">
            คลิก Tab และเปลี่ยนหน้า (Pagination) แล้วสังเกต Query String
            ที่เปลี่ยนไป
          </p>
        </div>

        {/* TabView */}
        <TabView
          activeIndex={activeIndex}
          onTabChange={(e) => handleTabChange(e.index)}
        >
          {tabMapping.map((tab) => (
            <TabPanel key={tab.key} header={tab.label}>
              <div className="p-4">
                <h3 className="font-semibold mb-2 text-gray-800">
                  {tab.label} Content
                </h3>
                <p className="text-gray-600 mb-4">
                  นี่คือเนื้อหาของ {tab.label} - Query String
                  จะเปลี่ยนเมื่อคุณสลับ Tab
                </p>
                <DataTable
                  value={dataByTab[tab.key]}
                  className="mb-4"
                  tableStyle={{ minWidth: "50rem" }}
                  stripedRows
                >
                  <Column
                    field="id"
                    header="ID"
                    sortable
                    style={{ width: "10%" }}
                  />
                  <Column
                    field="name"
                    header="Name"
                    sortable
                    style={{ width: "30%" }}
                  />
                  <Column
                    field="category"
                    header="Category"
                    sortable
                    style={{ width: "25%" }}
                    body={(rowData) => (
                      <Tag
                        value={rowData.category}
                        severity={
                          rowData.category === "Premium"
                            ? "success"
                            : rowData.category === "Standard"
                            ? "info"
                            : "warning"
                        }
                      />
                    )}
                  />
                  <Column
                    field="description"
                    header="Description"
                    style={{ width: "35%" }}
                  />
                </DataTable>

                {/* Pagination */}
                <Paginator
                  first={first}
                  rows={rows}
                  totalRecords={totalRecords}
                  onPageChange={onPageChange}
                  template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
                  currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                />
              </div>
            </TabPanel>
          ))}
        </TabView>
      </Card>

      {/* Tips Section */}
      <Card>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <i className="pi pi-star text-yellow-500"></i>
            💡 เคล็ดลับการใช้ Query String
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tip 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  📑 Shareable URLs
                </h3>
                <p className="text-sm text-blue-800">
                  Query string ทำให้ URL สามารถแชร์ได้ -
                  ผู้ใช้จะเห็นหน้าเดียวกันกับที่คุณส่งไป (เหมาะสำหรับ filters,
                  search results, tabs)
                </p>
              </div>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-2">
                  🔄 Browser History
                </h3>
                <p className="text-sm text-green-800">
                  ใช้{" "}
                  <code className="bg-white px-1 rounded">
                    router.replace()
                  </code>{" "}
                  เพื่อไม่ให้เพิ่ม history entry ใหม่ - ผู้ใช้กด Back
                  จะไม่ต้องกดหลายครั้ง
                </p>
              </div>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-2">
                  🔍 SEO Friendly
                </h3>
                <p className="text-sm text-purple-800">
                  Search engines สามารถ index URLs พร้อม query strings -
                  เหมาะสำหรับ pagination และ category filters
                </p>
              </div>
            </div>
          </div>

          {/* Tip 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-300 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">
                  💾 State Persistence
                </h3>
                <p className="text-sm text-orange-800">
                  Query string จะยังคงอยู่แม้ refresh หน้า - ไม่ต้องเก็บ state
                  ใน localStorage หรือ cookies
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-300 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <i className="pi pi-check-circle text-yellow-600 text-xl mt-1"></i>
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">
                ✅ Best Practices:
              </h3>
              <ul className="text-sm text-yellow-800 space-y-2">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    ใช้{" "}
                    <code className="bg-white px-1 rounded">
                      URLSearchParams
                    </code>{" "}
                    แทนการ parse string ด้วยตัวเอง
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    ใช้{" "}
                    <code className="bg-white px-1 rounded">
                      router.replace()
                    </code>{" "}
                    สำหรับ filter/pagination และ{" "}
                    <code className="bg-white px-1 rounded">router.push()</code>{" "}
                    สำหรับ navigation ปกติ
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    ตั้งค่า default values ใน component เมื่อ query parameter
                    ไม่มีค่า
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    ใช้ชื่อ parameter ที่สั้นและชัดเจน เช่น{" "}
                    <code className="bg-white px-1 rounded">
                      ?tab=products&page=2
                    </code>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
