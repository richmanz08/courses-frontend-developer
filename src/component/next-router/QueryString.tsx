import { useRouter, useSearchParams } from "next/navigation";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Paginator } from "primereact/paginator";
import { TabPanel, TabView } from "primereact/tabview";
import { useMemo } from "react";

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

  return (
    <div className="card">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Query String Management Demo</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-gray-700">
          <p>
            <strong>User ID:</strong> {userID}
          </p>
          <p>
            <strong>Current Tab:</strong> {tabMapping[activeIndex]?.key}
          </p>
          <p>
            <strong>Current Page:</strong> {currentPage + 1}
          </p>
          <p>
            <strong>Query String:</strong>{" "}
            <code className="bg-white px-2 py-1 rounded text-blue-600">
              {searchParams.toString() || "(empty)"}
            </code>
          </p>
        </div>

        {/* Code Block */}
        <div className="mb-6 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          {/* Code Header */}
          <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-3 text-sm font-medium">
                query-string-example.tsx
              </span>
            </div>
            <div className="text-xs text-gray-300">TypeScript</div>
          </div>

          {/* Code Content */}
          <div className="bg-gray-900 p-4 overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code className="text-gray-100">
                <span className="text-purple-400">import</span> {`{ `}
                <span className="text-blue-400">useRouter</span>,{" "}
                <span className="text-blue-400">useSearchParams</span> {`} `}
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
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">searchParams</span> ={" "}
                <span className="text-yellow-400">useSearchParams</span>();
                {`

`}
                <span className="text-gray-500">{`// Preserve existing query parameters`}</span>
                {`
`}
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">params</span> ={" "}
                <span className="text-purple-400">new</span>{" "}
                <span className="text-yellow-400">URLSearchParams</span>(
                <span className="text-blue-300">searchParams</span>.
                <span className="text-yellow-400">toString</span>());
                {`
`}
                <span className="text-blue-300">params</span>.
                <span className="text-yellow-400">set</span>(
                <span className="text-green-400">&quot;page&quot;</span>,{" "}
                <span className="text-blue-300">newPage</span>.
                <span className="text-yellow-400">toString</span>());
                {`

`}
                <span className="text-blue-300">router</span>.
                <span className="text-yellow-400">replace</span>(
                <span className="text-orange-400">
                  {"`"}?${"{"}
                </span>
                <span className="text-blue-300">params</span>.
                <span className="text-yellow-400">toString</span>()
                <span className="text-orange-400">{"}`"}</span>);
              </code>
            </pre>
          </div>
        </div>

        {/* Benefits Info */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h4 className="font-medium text-blue-800 mb-2">
            🔗 URLSearchParams Benefits
          </h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>
              ✅ <strong>Preserve existing queries:</strong> ไม่สูญเสีย query
              parameters อื่นๆ
            </li>
            <li>
              ✅ <strong>Easy manipulation:</strong> ใช้ .set(), .get(),
              .delete() ได้ง่าย
            </li>
            <li>
              ✅ <strong>URL encoding:</strong> จัดการ encoding อัตโนมัติ
            </li>
            <li>
              ✅ <strong>Browser compatible:</strong> รองรับทุก modern browser
            </li>
          </ul>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          💡 ลองเปลี่ยน tab และ pagination แล้ว refresh หน้าเว็บ -
          ระบบจะจำสถานะได้ผ่าน query string!
        </p>
      </div>
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => {
          const tabKey = tabMapping[e.index]?.key || "info";
          console.log({ e, tabKey });

          // Create new URLSearchParams to preserve existing query parameters
          const params = new URLSearchParams(searchParams.toString());
          params.set("tab", tabKey);
          // Reset to page 1 when changing tabs
          params.set("page", "1");

          router.replace(`?${params.toString()}`);
        }}
      >
        <TabPanel header="Information" key={"info"}>
          <div>Information about user {userID}</div>
        </TabPanel>
        <TabPanel header="Car list" key={"carlist"}>
          <div className="mb-4">
            <h3>Car list of user {userID}</h3>
            <p>
              Total cars: {cars.length} | Showing page {currentPage + 1}
            </p>
          </div>
          <DataTable
            value={paginatedCars}
            tableStyle={{ minWidth: "50rem" }}
            stripedRows
          >
            <Column field="id" header="ID"></Column>
            <Column field="make" header="Make"></Column>
            <Column field="model" header="Model"></Column>
            <Column field="year" header="Year"></Column>
            <Column field="color" header="Color"></Column>
            <Column
              field="price"
              header="Price"
              body={(rowData) =>
                new Intl.NumberFormat("th-TH", {
                  style: "currency",
                  currency: "THB",
                }).format(rowData.price)
              }
            ></Column>
            <Column
              field="mileage"
              header="Mileage"
              body={(rowData) => `${rowData.mileage.toLocaleString()} km`}
            ></Column>
          </DataTable>

          {/* Pagination */}
          <Paginator
            first={currentPage * rowsPerPage}
            rows={rowsPerPage}
            totalRecords={cars.length}
            onPageChange={onPageChange}
            template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} cars"
            className="mt-4"
          />
        </TabPanel>
      </TabView>
    </div>
  );
};
