import { useRouter } from "next/navigation";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { TerminalUI } from "../ui/TerminalUI";

interface UserRoutePageExampleProps {
  userID: string;
}
export const UserRoutePageExample = ({ userID }: UserRoutePageExampleProps) => {
  const router = useRouter();
  const user = [
    { userID: "12345", name: "John" },
    { userID: "54321", name: "Snow" },
    { userID: "9", name: "Michael" },
    { userID: "8", name: "Daemon" },
  ];
  return (
    <div className="flex justify-center flex-col p-4">
      <h1 className="mb-8 text-gray-800">User: {userID} </h1>
      {/* Content router replace */}
      <div className="bg-white rounded-lg p-6 mb-6">
        {/* Code Example Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">�</span>
          <h2 className="text-xl font-semibold text-gray-800">
            router.replace() ตัวอย่างพื้นฐาน
          </h2>
          <p className="text-gray-800">
            ใช้เพื่อไม่ให้ระบบจดจำ History ของการนำทาง
          </p>
        </div>

        <TerminalUI fileName="UserRoutePage.tsx" name="Use Router Replace">
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
                <span className="text-yellow-400">replace</span>(
                <span className="text-green-400">
                  &quot;/next-router/user/54321&quot;
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
                onClick={() => router.replace("/next-router/user/54321")}
              />
            </div>
          </div>
        </div>
      </div>
      <DataTable
        value={user}
        tableStyle={{ minWidth: "50rem" }}
        className="mb-8"
      >
        <Column field="userID" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column
          field="userID"
          header="push()"
          body={function ({ userID }) {
            return (
              <Button
                label="Try push"
                onClick={() => {
                  router.push(`/next-router/user/${userID}`);
                }}
              />
            );
          }}
        />
        <Column
          field="userID"
          header="replace()"
          body={function ({ userID }) {
            return (
              <Button
                severity="warning"
                label="Try replace"
                onClick={() => {
                  router.replace(`/next-router/user/${userID}`);
                }}
              />
            );
          }}
        />
        <Column
          field="userID"
          header="Go to Detail Page"
          body={function ({ userID }) {
            return (
              <Button
                severity="info"
                label="Go to Detail"
                onClick={() => {
                  router.push(`/next-router/user/${userID}/detail`);
                }}
              />
            );
          }}
        />
      </DataTable>
    </div>
  );
};
