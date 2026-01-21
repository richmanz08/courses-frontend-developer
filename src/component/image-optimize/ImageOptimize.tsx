import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Basic } from "./children/Basic";
import { Priority } from "./children/Priority";
import { ImageLoading } from "./children/ImageLoading";
import { ImageLoadFailed } from "./children/ImageLoadFailed";

export const ImageOptimize: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample images
  //   const landscapeImage = "https://picsum.photos/1200/600";
  //   const portraitImage = "https://picsum.photos/600/800";

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
        <TabPanel header="⏳Loading Image">
          <ImageLoading />
        </TabPanel>
        <TabPanel header="⏳ Loading Failed">
          <ImageLoadFailed />
        </TabPanel>
      </TabView>
    </div>
  );
};
