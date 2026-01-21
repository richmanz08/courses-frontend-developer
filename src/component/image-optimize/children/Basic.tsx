import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { TerminalUI } from "../../ui/TerminalUI";
import Image from "next/image";

export const Basic: React.FC = () => {
  const sampleImage = "https://picsum.photos/800/600";
  return (
    <div className="space-y-6">
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded mb-4 text-yellow-900 text-sm">
        <strong>💡 Next.js Image Cache:</strong> <br />
        Next.js <code>&lt;Image&gt;</code> จะ cache รูปไว้ที่ <b>ฝั่ง server</b>{" "}
        (image optimizer) ไม่ใช่ที่ client
        <br />
        ถ้าใช้ URL เดิม จะได้รูปเดิมเสมอ (จนกว่าจะ clear cache หรือเปลี่ยน URL)
      </div>
      {/* Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Normal img tag */}
        <Card className="shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-red-600">
                ❌ Normal &lt;img&gt;
              </h3>
              <Badge value="Not Optimized" severity="danger" />
            </div>

            <TerminalUI name="HTML img tag" fileName="image.tsx">
              <pre className="text-sm">
                <code className="text-gray-300">
                  {`<img 
     src="image.jpg"
     alt="sample"
     width={800}
     height={600}
   />`}
                </code>
              </pre>
            </TerminalUI>

            <div className="border rounded overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sampleImage}
                alt="Normal img"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Card>

        {/* Next.js Image */}
        <Card className="shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-green-600">
                ✅ Next.js &lt;Image&gt;
              </h3>
              <Badge value="Optimized" severity="success" />
            </div>

            <TerminalUI name="Next.js Image" fileName="image.tsx">
              <pre className="text-sm">
                <code className="text-gray-300">
                  {`import Image from "next/image";
   
   <Image
     src="image.jpg"
     alt="sample"
     width={800}
     height={600}
     priority
   />`}
                </code>
              </pre>
            </TerminalUI>

            <div className="border rounded overflow-hidden">
              <Image
                src={sampleImage}
                alt="Next.js Image"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
