"use client";
import { useState } from "react";

export default function UploadButton() {
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
    setFileName(file.name);
    console.log(
      "🚀 ~ file: FileUpload.tsx:8 ~ UploadButton ~ fileName:",
      fileName
    );
  };
  return (
    <>
      <label className="flex justify-center flex-col items-center rounded-full border border-gray-300 p-2 cursor-pointer w-[25px]  h-[25px]">
        +
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileUpload}
          className=" bg-fuchsia-950"
        />
        {fileName && <p className="mt-8">${fileName}</p>}
      </label>

      {/* <div onClick={handleFileUpload}>
        <input type="file" />
      </div> */}
    </>
  );
}
