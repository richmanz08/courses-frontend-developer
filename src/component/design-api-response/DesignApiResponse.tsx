import { TerminalUI } from "../ui/TerminalUI";

export function DesignApiResponse() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Design API Response
      </h1>

      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          คำแนะนำการ Design API Response
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="font-bold mr-3 text-blue-600">1.</span>
            <span>
              <strong>ใช้ HTTP Status Code ที่เหมาะสม</strong> -
              ส่งสถานะที่ถูกต้อง (200, 201, 400, 404, 500 เป็นต้น)
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-blue-600">2.</span>
            <span>
              <strong>โครงสร้างที่สม่ำเสมอ</strong> - ทุก response
              ควรมีรูปแบบเดียวกัน
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-blue-600">3.</span>
            <span>
              <strong>ข้อมูล Error ชัดเจน</strong> - บอก error code และ message
              ที่เข้าใจง่าย
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-blue-600">4.</span>
            <span>
              <strong>Pagination สำหรับข้อมูลจำนวนมาก</strong> - ใช้ limit,
              offset, total count
            </span>
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-3 text-blue-600">5.</span>
            <span>
              <strong>Metadata เมื่อจำเป็น</strong> - เพิ่ม timestamp, version
              เป็นต้น
            </span>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          ตัวอย่าง Response Formats
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 text-green-700">
            ✅ Success Response (GET /users)
          </h3>
          <TerminalUI fileName="response.json" name="200 OK">
            <code className="text-green-400 text-sm">
              {`{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 2,
    "totalPages": 1
  }
}`}
            </code>
          </TerminalUI>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 text-green-700">
            ✅ Success Response (POST /users) - Create
          </h3>
          <TerminalUI fileName="response.json" name="201 Created">
            <code className="text-green-400 text-sm">
              {`{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "createdAt": "2025-02-05T10:30:00Z"
  }
}`}
            </code>
          </TerminalUI>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 text-red-700">
            ❌ Error Response (400 Bad Request)
          </h3>
          <TerminalUI fileName="response.json" name="400 Bad Request">
            <code className="text-red-400 text-sm">
              {`{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}`}
            </code>
          </TerminalUI>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 text-red-700">
            ❌ Error Response (404 Not Found)
          </h3>
          <TerminalUI fileName="response.json" name="404 Not Found">
            <code className="text-red-400 text-sm">
              {`{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "User with id 999 not found"
  }
}`}
            </code>
          </TerminalUI>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold mb-3 text-red-700">
            ❌ Error Response (500 Server Error)
          </h3>
          <TerminalUI fileName="response.json" name="500 Server Error">
            <code className="text-red-400 text-sm">
              {`{
  "success": false,
  "error": {
    "code": "SERVER_ERROR",
    "message": "Internal server error",
    "requestId": "req-123456"
  }
}`}
            </code>
          </TerminalUI>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">สรุปเบื้องต้น</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">•</span>
            <span>
              ทำให้ response <strong>สม่ำเสมอ</strong> ในทุก endpoint
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">•</span>
            <span>
              ให้ข้อมูลที่ <strong>ชัดเจน</strong> เมื่อมี error
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">•</span>
            <span>
              ใช้ <strong>HTTP status code</strong> ให้ถูกต้อง
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-blue-500 mr-3">•</span>
            <span>
              เพิ่ม <strong>metadata</strong> เมื่อจำเป็น เช่น pagination,
              timestamps
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
