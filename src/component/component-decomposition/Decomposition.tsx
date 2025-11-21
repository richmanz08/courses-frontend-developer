import Image from "next/image";
import { Divider } from "primereact/divider";
import { TerminalUI } from "../ui/TerminalUI";
import React from "react";

export const DecompositionExample = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        ตัวอย่างการแยก Component
      </h1>
      <p className="text-gray-800">
        ตัวอย่างนี้แสดงให้เห็นถึงวิธีการแบ่ง UI ที่ซับซ้อนออกเป็น component
        เล็กๆ ที่สามารถนำกลับมาใช้ได้ เพื่อการบำรุงรักษาและอ่านโค้ดที่ง่ายขึ้น
        แต่ละส่วนของ UI จะถูกจัดการโดย component ของตัวเอง
        ทำให้ง่ายต่อการจัดการและอัพเดทแต่ละส่วน โดยไม่กระทบต่อส่วนอื่นๆ
      </p>
      <div className="border flex justify-center items-center p-4 rounded-lg">
        <Image
          src="/exampleUI.png"
          alt="Description of image"
          width={500}
          height={500}
        />
      </div>
      <div className="space-y-8 mt-8">
        <div className="">
          <h1 className="text-gray-800 text-xl text-green-600">
            ส่วนที่ 1 ::: Breadcrumb{" "}
          </h1>
          <div className="border border-gray-300 p-4 rounded-xl mt-4">
            <Image
              src="/Breadcrumb.png"
              alt="Description of image"
              width={400}
              height={100}
            />
          </div>
        </div>
        <div>
          <h1 className="text-gray-800 text-xl text-green-600">
            ส่วนที่ 2 ::: Information Box
          </h1>
          <div className="border border-gray-300 p-4 rounded-xl mt-4">
            <Image
              src="/InformationBox.png"
              alt="Description of image"
              width={600}
              height={200}
            />
            <Divider />
            <div className="flex flex-row items-center gap-4 w-full">
              <h1 className="text-gray-800 text-lg whitespace-nowrap text-yellow-800">
                ส่วนย่อยที่ 2.1 - Phone
              </h1>
              <Image
                src="/phone.png"
                alt="Description of image"
                width={50}
                height={50}
              />
              <Divider />
            </div>
            <p className="text-gray-600 mt-2 mb-8">
              หมายเหตุ: ฟั่งก์ชันการทำงานของปุ่มโทรศัพท์ ที่สามารถจะทำให้ user
              สามารถกดโทรออกได้ ถ้าใช้งานบนมือถือ
            </p>

            <div className="flex flex-row items-center gap-4 w-full">
              <h1 className="text-gray-800 text-lg whitespace-nowrap text-yellow-800">
                ส่วนย่อยที่ 2.2 - Favorite
              </h1>
              <Image
                src="/favorite.png"
                alt="Description of image"
                width={50}
                height={50}
              />
            </div>
            <p className="text-gray-600 mt-2 mb-8">
              หมายเหตุ: ฟั่งก์ชันการทำงานของปุ่ม Favorite ที่สามารถจะทำให้ user
              สามารถกดเพิ่มรายการโปรดได้
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="text-gray-800 text-xl text-green-600">
            ส่วนที่ 3 ::: Tab menu button
          </h1>
          <div className="border border-gray-300 p-4 rounded-xl mt-4">
            <Image
              src="/tab.png"
              alt="Description of image"
              className="mb-4"
              width={600}
              height={200}
            />

            <Divider />

            <TerminalUI fileName="TabMenu.tsx" name="TabMenu">
              <pre className="text-sm leading-relaxed">
                <code>
                  <span className="text-gray-500">
                    {"// Define TypeScript interfaces"}
                  </span>
                  {"\n"}
                  <span className="text-pink-400">interface</span>{" "}
                  <span className="text-yellow-300">TabMenuItemProps</span>{" "}
                  {"{\n"}
                  {"  "}
                  <span className="text-blue-300">activeKey</span>?:{" "}
                  <span className="text-green-400">string</span>;{"\n"}
                  {"  "}
                  <span className="text-blue-300">tabs</span>:{" "}
                  <span className="text-yellow-300">TabItem</span>[];{"\n"}
                  {"}\n\n"}
                  <span className="text-pink-400">interface</span>{" "}
                  <span className="text-yellow-300">TabItem</span> {"{\n"}
                  {"  "}
                  <span className="text-blue-300">key</span>:{" "}
                  <span className="text-green-400">string</span>;{"\n"}
                  {"  "}
                  <span className="text-blue-300">label</span>:{" "}
                  <span className="text-green-400">string</span>;{"\n"}
                  {"  "}
                  <span className="text-blue-300">icon</span>:{" "}
                  <span className="text-blue-300">React</span>.
                  <span className="text-yellow-300">ReactNode</span>;{"\n"}
                  {"}\n\n"}
                  <span className="text-gray-500">{"// Usage example"}</span>
                  {"\n"}
                  {"<"}
                  <span className="text-yellow-300">TabMenuItem</span>
                  {"\n  "}
                  <span className="text-blue-300">tabs</span>={"{["}
                  {"\n    {\n"}
                  {"      "}
                  <span className="text-blue-300">key</span>:{" "}
                  <span className="text-green-400">&quot;overview&quot;</span>,
                  {"\n"}
                  {"      "}
                  <span className="text-blue-300">label</span>:{" "}
                  <span className="text-green-400">&quot;ภาพรวม&quot;</span>,
                  {"\n"}
                  {"      "}
                  <span className="text-blue-300">icon</span>: {"<"}
                  <span className="text-blue-300">i</span>{" "}
                  <span className="text-blue-300">className</span>=
                  <span className="text-green-400">
                    &quot;pi pi-dashboard&quot;
                  </span>{" "}
                  {"/>,\n"}
                  {"    },\n"}
                  <span>...Add more tabs as needed</span>
                  {"\n"}
                  {"  ]}\n"}
                  {"/>"}
                </code>
              </pre>
            </TerminalUI>
            <p className="text-gray-600 mt-2 mb-8">
              หมายเหตุ: ทำการสร้าง Tab Menu ที่สามารถเปลี่ยน tab ได้เมื่อคลิก
              โดยใช้ props ในการกำหนด tab ต่างๆ ส่วนสำคัญของ item แต่ละ tab
              จะประกอบด้วย{" "}
              <strong className="text-indigo-800">key, label, และ icon</strong>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-gray-800 text-xl text-green-600">
            ส่วนที่ 4 ::: Mask data box
          </h1>
          <div className="flex flex-row items-center">
            <Image
              src="/contentBox.png"
              alt="Description of image"
              width={600}
              height={600}
            />
            <TerminalUI fileName="ContentBox.tsx" name="ContentBox">
              <pre className="text-sm leading-relaxed">
                <code>
                  <span className="text-gray-500">
                    {"// Define MaskDataBox interface"}
                  </span>
                  {"\n"}
                  <span className="text-pink-400">interface</span>{" "}
                  <span className="text-yellow-300">MaskDataBoxProps</span>{" "}
                  {"{\n"}
                  {"  "}
                  <span className="text-blue-300">children</span>:{" "}
                  <span className="text-blue-300">React</span>.
                  <span className="text-yellow-300">ReactNode</span>;{"\n"}
                  {"  "}
                  <span className="text-blue-300">title</span>:{" "}
                  <span className="text-green-400">string</span>;{"\n"}
                  {"  "}
                  <span className="text-blue-300">icon</span>:{" "}
                  <span className="text-blue-300">React</span>.
                  <span className="text-yellow-300">ReactNode</span>;{"\n"}
                  {"  "}
                  <span className="text-blue-300">footer</span>?:{" "}
                  <span className="text-blue-300">React</span>.
                  <span className="text-yellow-300">ReactNode</span>;{"\n"}
                  {"}\n\n"}
                  <span className="text-gray-500">{"// Usage example"}</span>
                  {"\n"}
                  {"<"}
                  <span className="text-yellow-300">MaskDataBox</span>
                  {"\n  "}
                  <span className="text-blue-300">title</span>=
                  <span className="text-green-400">
                    &quot;ข้อมูลการซื้อขาย&quot;
                  </span>
                  {"\n  "}
                  <span className="text-blue-300">icon</span>={"{<"}
                  <span className="text-blue-300">i</span>{" "}
                  <span className="text-blue-300">className</span>=
                  <span className="text-green-400">&quot;pi pi-home&quot;</span>
                  {" />}\n"}
                  {">\n"}
                  {"  "}
                  <span className="text-green-400">hello world</span>
                  {"\n"}
                  {"</"}
                  <span className="text-yellow-300">MaskDataBox</span>
                  {">\n\n"}
                  <span className="text-gray-500">
                    {"// With footer example"}
                  </span>
                  {"\n"}
                  {"<"}
                  <span className="text-yellow-300">MaskDataBox</span>
                  {"\n  "}
                  <span className="text-blue-300">title</span>=
                  <span className="text-green-400">&quot;รายละเอียด&quot;</span>
                  {"\n  "}
                  <span className="text-blue-300">icon</span>={"{<"}
                  <span className="text-blue-300">i</span>{" "}
                  <span className="text-blue-300">className</span>=
                  <span className="text-green-400">
                    &quot;pi pi-info-circle&quot;
                  </span>
                  {" />}\n"}
                  {"  "}
                  <span className="text-blue-300">footer</span>={"{<"}
                  <span className="text-yellow-300">Button</span>{" "}
                  <span className="text-blue-300">label</span>=
                  <span className="text-green-400">
                    &quot;ดูเพิ่มเติม&quot;
                  </span>
                  {" />}\n"}
                  {">\n"}
                  {"  "}
                  <span className="text-blue-300">Content goes here</span>
                  {"\n"}
                  {"</"}
                  <span className="text-yellow-300">MaskDataBox</span>
                  {">"}
                </code>
              </pre>
            </TerminalUI>
          </div>

          <p className="text-gray-600 mt-2 mb-8">
            หมายเหตุ: ส่วนนี้จะนำไปสวมกับข้อมูลที่ต้องการแสดงผลด้วยรูปแบบต่างๆ
          </p>
        </div>
        <div className="flex flex-row items-center gap-4 w-full">
          <h1 className="text-gray-800 text-lg whitespace-nowrap text-yellow-800">
            ส่วนย่อยที่ 4.1 - Card
          </h1>
          <Image
            src="/card.png"
            alt="Description of image"
            width={400}
            height={200}
          />
        </div>
        <p className="text-gray-600 mt-2 mb-8">
          หมายเหตุ: ต้องแยกส่วนนี้ออกมาเป็น Card component เพื่อความสะดวก
          แล้วค่อยจับไปใส่ใน Mask data box
        </p>
      </div>
    </div>
  );
};
