import Image from "next/image";
import React from "react";

export const Priority: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Priority Image Loaded</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet
      asperiores omnis assumenda distinctio odit placeat architecto, magnam qui
      iusto dolore eaque. Impedit exercitationem asperiores quos facere dicta,
      maxime voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Non amet asperiores omnis assumenda distinctio odit placeat
      architecto, magnam qui iusto dolore eaque. Impedit exercitationem
      asperiores quos facere dicta, maxime voluptatibus. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Non amet asperiores omnis assumenda
      distinctio odit placeat architecto, magnam qui iusto dolore eaque. Impedit
      exercitationem asperiores quos facere dicta, maxime voluptatibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Non amet asperiores
      omnis assumenda distinctio odit placeat architecto, magnam qui iusto
      dolore eaque. Impedit exercitationem asperiores quos facere dicta, maxime
      voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
      amet asperiores omnis assumenda distinctio odit placeat architecto, magnam
      qui iusto dolore eaque. Impedit exercitationem asperiores quos facere
      dicta, maxime voluptatibus. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Non amet asperiores omnis assumenda distinctio odit
      placeat architecto, magnam qui iusto dolore eaque. Impedit exercitationem
      asperiores quos facere dicta, maxime voluptatibus. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Non amet asperiores omnis assumenda
      distinctio odit placeat architecto, magnam qui iusto dolore eaque. Impedit
      exercitationem asperiores quos facere dicta, maxime voluptatibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Non amet asperiores
      omnis assumenda distinctio odit placeat architecto, magnam qui iusto
      dolore eaque. Impedit exercitationem asperiores quos facere dicta, maxime
      voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
      amet asperiores omnis assumenda distinctio odit placeat architecto, magnam
      qui iusto dolore eaque. Impedit exercitationem asperiores quos facere
      dicta, maxime voluptatibus. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Non amet asperiores omnis assumenda distinctio odit
      placeat architecto, magnam qui iusto dolore eaque. Impedit exercitationem
      asperiores quos facere dicta, maxime voluptatibus. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Non amet asperiores omnis assumenda
      distinctio odit placeat architecto, magnam qui iusto dolore eaque. Impedit
      exercitationem asperiores quos facere dicta, maxime voluptatibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Non amet asperiores
      omnis assumenda distinctio odit placeat architecto, magnam qui iusto
      dolore eaque. Impedit exercitationem asperiores quos facere dicta, maxime
      voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
      amet asperiores omnis assumenda distinctio odit placeat architecto, magnam
      qui iusto dolore eaque. Impedit exercitationem asperiores quos facere
      dicta, maxime voluptatibus. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Non amet asperiores omnis assumenda distinctio odit
      placeat architecto, magnam qui iusto dolore eaque. Impedit exercitationem
      asperiores quos facere dicta, maxime voluptatibus. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Non amet asperiores omnis assumenda
      distinctio odit placeat architecto, magnam qui iusto dolore eaque. Impedit
      exercitationem asperiores quos facere dicta, maxime voluptatibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Non amet asperiores
      omnis assumenda distinctio odit placeat architecto, magnam qui iusto
      dolore eaque. Impedit exercitationem asperiores quos facere dicta, maxime
      voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
      amet asperiores omnis assumenda distinctio odit placeat architecto, magnam
      qui iusto dolore eaque. Impedit exercitationem asperiores quos facere
      dicta, maxime voluptatibus. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Non amet asperiores omnis assumenda distinctio odit
      placeat architecto, magnam qui iusto dolore eaque. Impedit exercitationem
      asperiores quos facere dicta, maxime voluptatibus. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Non amet asperiores omnis assumenda
      distinctio odit placeat architecto, magnam qui iusto dolore eaque. Impedit
      exercitationem asperiores quos facere dicta, maxime voluptatibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Non amet asperiores
      omnis assumenda distinctio odit placeat architecto, magnam qui iusto
      dolore eaque. Impedit exercitationem asperiores quos facere dicta, maxime
      voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
      amet asperiores omnis assumenda distinctio odit placeat architecto, magnam
      qui iusto dolore eaque. Impedit exercitationem asperiores quos facere
      dicta, maxime voluptatibus. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Non amet asperiores omnis assumenda distinctio odit
      placeat architecto, magnam qui iusto dolore eaque. Impedit exercitationem
      asperiores quos facere dicta, maxime voluptatibus. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Non amet asperiores omnis assumenda
      distinctio odit placeat architecto, magnam qui iusto dolore eaque. Impedit
      exercitationem asperiores quos facere dicta, maxime voluptatibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Non amet asperiores
      omnis assumenda distinctio odit placeat architecto, magnam qui iusto
      dolore eaque. Impedit exercitationem asperiores quos facere dicta, maxime
      voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
      amet asperiores omnis assumenda distinctio odit placeat architecto, magnam
      qui iusto dolore eaque. Impedit exercitationem asperiores quos facere
      dicta, maxime voluptatibus.
      <div className="bg-green-100 h-[300vh] w-full"></div>
      <div className="relative w-full h-96">
        <Image
          src={
            "https://my-que-s3-bucket.s3.ap-southeast-2.amazonaws.com/car/0ff27ec0-853c-4500-b9fc-a8d47778f362-helloworldcrop.jpg"
          }
          fill
          className="object-cover"
          alt="fill"
          loading="lazy"
          onLoadingComplete={function () {
            console.log("Image loaded!");
          }}
          onLoad={function (e) {
            console.log("Image loaded!");
          }}
        />
      </div>
      <div className="relative w-full h-96">
        <Image
          src={
            "https://my-que-s3-bucket.s3.ap-southeast-2.amazonaws.com/car/133633a2-769e-4cba-bd1f-e65ff4940f90-civic_11th_exterior_001.jpg"
          }
          fill
          className="object-cover"
          alt="fill"
          priority
        />
      </div>
    </div>
  );
};
