import React, { useState } from "react";
import Image from "next/image";
import { TerminalUI } from "../ui/TerminalUI";
import { Card } from "primereact/card";
import { TabView, TabPanel } from "primereact/tabview";
import { Badge } from "primereact/badge";
import { Message } from "primereact/message";
import { Basic } from "./children/Basic";
import { Priority } from "./children/Priority";

export const ImageOptimize: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample images
  const landscapeImage = "https://picsum.photos/1200/600";
  const portraitImage = "https://picsum.photos/600/800";

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          🖼️ Next.js Image Optimization
        </h1>
        <p className="text-gray-600">
          เรียนรู้การใช้งาน Next.js Image component เพื่อ optimize รูปภาพ
        </p>
      </div>

      {/* Main Content */}
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="🎯 Basic Usage">
          <Basic />
        </TabPanel>

        <TabPanel header="Priority">
          <Priority />
        </TabPanel>

        {/* Tab 3: Loading States */}
        <TabPanel header="⏳ Loading & Priority">
          <div className="space-y-6">
            <TerminalUI name="Loading States" fileName="loading.tsx">
              <pre className="text-sm">
                <code className="text-gray-300">
                  {`import Image from "next/image";

// 1. Priority (above the fold)
<Image 
  src="hero.jpg" 
  width={1920} 
  height={1080}
  priority  // โหลดทันที ไม่ lazy load
  alt="hero"
/>

// 2. Lazy Loading (default)
<Image 
  src="below-fold.jpg" 
  width={800} 
  height={600}
  // loading="lazy" เป็น default
  alt="lazy"
/>

// 3. Placeholder
<Image 
  src="image.jpg" 
  width={800} 
  height={600}
  placeholder="blur"
  blurDataURL="data:image/..."
  alt="blur"
/>`}
                </code>
              </pre>
            </TerminalUI>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Priority */}
              <Card className="border-t-4 border-blue-500">
                <div className="space-y-2">
                  <h3 className="font-bold text-blue-600">🚀 priority</h3>
                  <p className="text-sm text-gray-600">
                    ใช้กับรูปที่สำคัญ (above the fold) เช่น hero image
                  </p>
                  <code className="text-xs bg-gray-100 p-2 rounded block">
                    priority
                  </code>
                </div>
              </Card>

              {/* Lazy */}
              <Card className="border-t-4 border-green-500">
                <div className="space-y-2">
                  <h3 className="font-bold text-green-600">⏳ Lazy Loading</h3>
                  <p className="text-sm text-gray-600">
                    Default behavior - โหลดเมื่อเลื่อนมาใกล้
                  </p>
                  <code className="text-xs bg-gray-100 p-2 rounded block">
                    loading=&quot;lazy&quot;
                  </code>
                </div>
              </Card>

              {/* Placeholder */}
              <Card className="border-t-4 border-purple-500">
                <div className="space-y-2">
                  <h3 className="font-bold text-purple-600">🎨 Placeholder</h3>
                  <p className="text-sm text-gray-600">
                    แสดง blur placeholder ขณะโหลด
                  </p>
                  <code className="text-xs bg-gray-100 p-2 rounded block">
                    placeholder=&quot;blur&quot;
                  </code>
                </div>
              </Card>
            </div>
          </div>
        </TabPanel>

        {/* Tab 4: Best Practices */}
        <TabPanel header="✨ Best Practices">
          <div className="space-y-6">
            <TerminalUI name="Best Practices" fileName="best-practices.tsx">
              <pre className="text-sm">
                <code className="text-gray-300">
                  {`// ✅ DO: ระบุ width และ height
<Image src="image.jpg" width={800} height={600} alt="good" />

// ✅ DO: ใช้ priority สำหรับ hero images
<Image src="hero.jpg" width={1920} height={1080} priority alt="hero" />

// ✅ DO: ใช้ fill กับ container ที่มี position: relative
<div className="relative w-full h-96">
  <Image src="image.jpg" fill className="object-cover" alt="fill" />
</div>

// ✅ DO: ใช้ sizes สำหรับ responsive images
<Image 
  src="image.jpg" 
  width={1200} 
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="responsive"
/>

// ❌ DON'T: ใช้ img tag ธรรมดา
<img src="image.jpg" alt="bad" />

// ❌ DON'T: ลืมใส่ alt text
<Image src="image.jpg" width={800} height={600} />`}
                </code>
              </pre>
            </TerminalUI>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-green-50">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <i className="pi pi-check-circle"></i>✅ Best Practices
                </h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>ระบุ width และ height เสมอ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>ใช้ priority กับรูปสำคัญ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>ใส่ alt text ที่มีความหมาย</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>ใช้ sizes สำหรับ responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>ใช้ placeholder=&quot;blur&quot; ถ้าเป็นไปได้</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-red-50">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <i className="pi pi-times-circle"></i>❌ Common Mistakes
                </h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>ใช้ &lt;img&gt; tag แทน &lt;Image&gt;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>ลืมใส่ width/height</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>ลืมใส่ alt text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>ใช้ priority กับทุกรูป</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>ไม่ optimize รูปก่อนใช้งาน</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Configuration */}
            <Card className="bg-blue-50">
              <h3 className="font-bold text-blue-800 mb-3">
                ⚙️ next.config.js Configuration
              </h3>
              <TerminalUI name="next.config.js" fileName="next.config.js">
                <pre className="text-sm">
                  <code className="text-gray-300">
                    {`module.exports = {
  images: {
    // External domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
    // Image formats
    formats: ['image/avif', 'image/webp'],
    // Device sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}`}
                  </code>
                </pre>
              </TerminalUI>
            </Card>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
};
