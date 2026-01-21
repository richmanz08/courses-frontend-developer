import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "primereact/skeleton";

type ImageLoadingStatus = "loading" | "loaded" | "failed";

export const ImageLoadFailed: React.FC = () => {
  const [loading, setLoading] = useState<ImageLoadingStatus>("loading");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Loading States</h2>
      <p className="text-gray-600">แสดงสถานะการโหลดรูปภาพ</p>
      <div className="flex space-x-4">
        <div
          className="flex-1 relative w-full w-[600px] h-[800px]"
          style={{ minHeight: 300 }}
        >
          {loading !== "failed" ? (
            <Image
              src="https://images.pexels.com/photos/19419456/pexels-photo-19419456ฟ.jpeg"
              alt="Loading..."
              loading="eager"
              className="object-cover"
              style={{
                display: "block",
                borderRadius: 8,
              }}
              fill
              onLoadingComplete={() => {
                console.log("onLoadingComplete loaded:");
                setLoading("loaded");
              }}
              onError={() => {
                console.log("onError:");
                setLoading("failed");
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f3f4f6",
                borderRadius: 8,
                fontSize: 50,
              }}
            >
              <h3>ไม่สามารถโหลดรูปภาพได้</h3>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 8,
              zIndex: 2,
              pointerEvents: "none",
              transition: "opacity 0.5s",
              opacity: loading === "loading" ? 1 : 0,
              background: "rgba(255,255,255,0.2)",
            }}
          >
            <Skeleton width="100%" height="100%" borderRadius="8px" />
          </div>
        </div>
      </div>
    </div>
  );
};
