"use client";

import { useRef } from "react";
import { useFileAIStore } from "@/store/useFileAIStore";
import ImageViewer from "./ImageViewer";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface UploadError {
  message: string;
  [key: string]: any;
}

interface UploadEvent {
  target: any;
  [key: string]: any;
}

const ImageKitAITransformation = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-md mx-auto ">
      <div className="flex flex-col items-center gap-4 w-full">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:cursor-pointer hover:bg-blue-600">
          Upload Image
        </button>

        {1 > 0 && (
          <div className="relative mt-4 w-[250px]">
            <div className="absolute top-0 left-0 bg-gray-300 h-2 w-[100%] rounded z-[0]" />
            <div
              className="absolute top-0 left-0 bg-blue-500 h-2 rounded z-[1]"
              style={{
                width: `${1}%`,
              }}
            />
            <p className="text-sm text-gray-600 mt-4 text-center">
              {1}% uploaded
            </p>
          </div>
        )}
      </div>

      {/* Display only the image viewer */}
      <div className="w-full flex flex-col items-center">
        <ImageViewer />
      </div>
    </div>
  );
};

export default ImageKitAITransformation;
