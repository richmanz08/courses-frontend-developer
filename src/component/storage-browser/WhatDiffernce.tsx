import React from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Message } from "primereact/message";

interface StorageComparison {
  feature: string;
  cookie: string | React.ReactNode;
  sessionStorage: string | React.ReactNode;
  localStorage: string | React.ReactNode;
}

export const WhatDifference: React.FC = () => {
  const comparisonData: StorageComparison[] = [
    {
      feature: "ความจุ",
      cookie: "~4KB",
      sessionStorage: "~5-10MB",
      localStorage: "~5-10MB",
    },
    {
      feature: "อายุการเก็บ",
      cookie: "ตั้งค่าได้ (expires/max-age)",
      sessionStorage: "จนกว่าจะปิด tab/browser",
      localStorage: "ถาวร (จนกว่าจะลบ)",
    },
    {
      feature: "ส่งไปยัง Server",
      cookie: (
        <Tag severity="success" value="ส่งทุก request" icon="pi pi-check" />
      ),
      sessionStorage: (
        <Tag severity="danger" value="ไม่ส่ง" icon="pi pi-times" />
      ),
      localStorage: <Tag severity="danger" value="ไม่ส่ง" icon="pi pi-times" />,
    },
    {
      feature: "Accessible From",
      cookie: "Client & Server",
      sessionStorage: "Client เท่านั้น",
      localStorage: "Client เท่านั้น",
    },
    {
      feature: "Scope",
      cookie: "ทุก tab ของ domain เดียวกัน",
      sessionStorage: "แค่ tab นั้นๆ",
      localStorage: "ทุก tab ของ domain เดียวกัน",
    },
    {
      feature: "Security",
      cookie: "HttpOnly, Secure, SameSite",
      sessionStorage: "ไม่มี",
      localStorage: "ไม่มี",
    },
    {
      feature: "Performance",
      cookie: "ช้ากว่า (ส่งทุก request)",
      sessionStorage: "เร็ว",
      localStorage: "เร็ว",
    },
  ];

  const featureBodyTemplate = (rowData: StorageComparison) => {
    return <strong className="text-gray-800">{rowData.feature}</strong>;
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          🍪 💾 🗄️ Browser Storage Comparison
        </h1>
        <p className="text-gray-600 text-lg">
          ความแตกต่างระหว่าง Cookie, Session Storage และ Local Storage
        </p>
      </div>

      {/* Comparison Table */}
      <Card className="shadow-lg">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            📊 ตารางเปรียบเทียบ
          </h2>
          <p className="text-gray-600">
            เปรียบเทียบคุณสมบัติหลักของแต่ละประเภท Storage
          </p>
        </div>
        <DataTable
          value={comparisonData}
          stripedRows
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <Column
            field="feature"
            header="คุณสมบัติ"
            body={featureBodyTemplate}
            style={{ width: "20%" }}
            className="font-semibold"
          />
          <Column
            field="cookie"
            header={
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍪</span>
                <span>Cookie</span>
              </div>
            }
            style={{ width: "27%" }}
          />
          <Column
            field="sessionStorage"
            header={
              <div className="flex items-center gap-2">
                <span className="text-2xl">💾</span>
                <span>Session Storage</span>
              </div>
            }
            style={{ width: "27%" }}
          />
          <Column
            field="localStorage"
            header={
              <div className="flex items-center gap-2">
                <span className="text-2xl">🗄️</span>
                <span>Local Storage</span>
              </div>
            }
            style={{ width: "26%" }}
          />
        </DataTable>
      </Card>

      {/* Detailed Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cookie Card */}
        <Card className="shadow-lg border-t-4 border-orange-500">
          <div className="text-center mb-4">
            <span className="text-6xl mb-2 block">🍪</span>
            <h3 className="text-2xl font-bold text-gray-800">Cookie</h3>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                <i className="pi pi-check-circle"></i> ข้อดี:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>ส่งไปยัง server อัตโนมัติ</li>
                <li>มี security options</li>
                <li>กำหนดวันหมดอายุได้</li>
                <li>ทำงานได้ทั้ง client & server</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                <i className="pi pi-times-circle"></i> ข้อเสีย:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>ขนาดเล็ก (~4KB)</li>
                <li>ส่ง request ทุกครั้ง → ช้า</li>
                <li>API ซับซ้อน</li>
              </ul>
            </div>

            <div className="pt-3 border-t">
              <h4 className="font-semibold text-blue-600 mb-2">
                🎯 ใช้เมื่อไหร่:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>Authentication tokens</li>
                <li>Session management</li>
                <li>Server ต้องการข้อมูล</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Session Storage Card */}
        <Card className="shadow-lg border-t-4 border-blue-500">
          <div className="text-center mb-4">
            <span className="text-6xl mb-2 block">💾</span>
            <h3 className="text-2xl font-bold text-gray-800">
              Session Storage
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                <i className="pi pi-check-circle"></i> ข้อดี:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>ความจุใหญ่ (~5-10MB)</li>
                <li>ไม่ส่งไปยัง server → เร็ว</li>
                <li>ข้อมูลแยกต่าง tab</li>
                <li>Auto clear เมื่อปิด tab</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                <i className="pi pi-times-circle"></i> ข้อเสีย:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>หายเมื่อปิด tab</li>
                <li>ไม่แชร์ข้อมูลระหว่าง tab</li>
                <li>Client-side เท่านั้น</li>
              </ul>
            </div>

            <div className="pt-3 border-t">
              <h4 className="font-semibold text-blue-600 mb-2">
                🎯 ใช้เมื่อไหร่:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>Multi-step forms</li>
                <li>Temporary UI state</li>
                <li>Shopping cart ชั่วคราว</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Local Storage Card */}
        <Card className="shadow-lg border-t-4 border-purple-500">
          <div className="text-center mb-4">
            <span className="text-6xl mb-2 block">🗄️</span>
            <h3 className="text-2xl font-bold text-gray-800">Local Storage</h3>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                <i className="pi pi-check-circle"></i> ข้อดี:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>ความจุใหญ่ (~5-10MB)</li>
                <li>ข้อมูลคงอยู่ถาวร</li>
                <li>แชร์ข้อมูลได้ทุก tab</li>
                <li>API ง่าย</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                <i className="pi pi-times-circle"></i> ข้อเสีย:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>ไม่มีวันหมดอายุอัตโนมัติ</li>
                <li>ไม่มี security features</li>
                <li>เก็บได้แค่ string</li>
              </ul>
            </div>

            <div className="pt-3 border-t">
              <h4 className="font-semibold text-blue-600 mb-2">
                🎯 ใช้เมื่อไหร่:
              </h4>
              <ul className="text-sm text-gray-700 space-y-1 ml-6 list-disc">
                <li>User preferences</li>
                <li>App settings</li>
                <li>Shopping cart ถาวร</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Security Warning */}
      <Message
        severity="warn"
        className="shadow-lg"
        content={
          <div className="ml-2">
            <h3 className="font-bold text-lg mb-2">
              ⚠️ คำเตือนด้านความปลอดภัย
            </h3>
            <ul className="space-y-1 text-sm ml-4 list-disc">
              <li>
                <strong>อย่าเก็บข้อมูลสำคัญ</strong> เช่น password, credit card
                ใน Storage
              </li>
              <li>
                ใช้ <strong>HttpOnly Cookie</strong> สำหรับ authentication
                tokens
              </li>
              <li>
                <strong>Encrypt ข้อมูล</strong> ก่อนเก็บถ้าจำเป็น
              </li>
              <li>
                ระวังการโจมตีแบบ <strong>XSS (Cross-Site Scripting)</strong>
              </li>
            </ul>
          </div>
        }
      />

      {/* Best Practices */}
      <Card className="shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ✨ Best Practices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
              🍪 Cookie
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc ml-4">
              <li>Authentication/Authorization</li>
              <li>Session tracking</li>
              <li>Server-side data</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-blue-600 mb-2 flex items-center gap-2">
              💾 Session Storage
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc ml-4">
              <li>Temporary form data</li>
              <li>UI state (filters, tabs)</li>
              <li>One-time workflows</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-purple-600 mb-2 flex items-center gap-2">
              🗄️ Local Storage
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 list-disc ml-4">
              <li>User preferences</li>
              <li>App settings</li>
              <li>Cached data</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};
