import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { TerminalUI } from "../../ui/TerminalUI";
import Image from "next/image";

export const ImageCache: React.FC = () => {
  const sampleImage = "https://picsum.photos/800/600";
  return (
    <div className="space-y-6">
      {/* Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*No Cache */}
        <Card className="shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-green-600">No Cache</h3>
              <Badge value="Optimized" severity="success" />
            </div>

            <div className="border rounded overflow-hidden">
              <Image
                src={sampleImage}
                alt="Next.js Image"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </Card>

        {/*  Cache */}
        <Card className="shadow-lg">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-red-600">Cache</h3>
              <Badge value="Optimized" severity="success" />
            </div>

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
