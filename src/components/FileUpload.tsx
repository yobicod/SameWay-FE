"use client";

import Image from "next/image";

export default function UploadButton() {
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    // Do something with the uploaded file, such as saving it or processing it
    console.log("Uploaded file:", file);
  };
  return (
    <>
      <label className="flex justify-center items-center rounded-full border border-gray-300 p-2 cursor-pointer w-[25px]  h-[25px]">
        +
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
          className=" bg-fuchsia-950"
        />
      </label>
      {/* <div onClick={handleFileUpload}>
        <input type="file" />
      </div> */}
    </>
  );
}
