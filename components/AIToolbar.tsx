"use client";
import { useState } from "react";
import {
  MdOutlineHideImage,
  MdAutoFixHigh,
  MdOutlineChangeCircle,
  MdOutlineFace,
  MdCrop,
} from "react-icons/md";
import { BsImageFill, BsShadows, BsArrowsFullscreen } from "react-icons/bs";

// Define the AI transformation options
const aiTransformations = [
  {
    id: "removebg",
    name: "Remove Background",
    icon: <MdOutlineHideImage size={20} />,
    param: "e-removedotbg",
    description: "Remove the background from an image",
  },
  {
    id: "bgremove",
    name: "ImageKit BG Remove",
    icon: <BsImageFill size={20} />,
    param: "e-bgremove",
    description: "Cost-efficient background removal",
  },
  {
    id: "changebg",
    name: "Change Background",
    icon: <MdOutlineChangeCircle size={20} />,
    param: "e-changebg-prompt-shinny blue sky with clouds",
    description: "Change the background using a text prompt",
  },

  {
    id: "dropshadow",
    name: "Drop Shadow",
    icon: <BsShadows size={20} />,
    param: "e-bgremove:e-dropshadow-az-45",
    description: "Add a drop shadow around an object",
  },
  {
    id: "retouch",
    name: "Retouch",
    icon: <MdAutoFixHigh size={20} />,
    param: "e-retouch",
    description: "Improve the quality of an image",
  },
  {
    id: "upscale",
    name: "Upscale",
    icon: <BsArrowsFullscreen size={20} />,
    param: "e-upscale",
    description: "Increase the resolution of an image",
  },
  {
    id: "facecrop",
    name: "Face Crop",
    icon: <MdOutlineFace size={20} />,
    param: "fo-dog",
    description: "Crop an image based on detected dog",
  },
  {
    id: "smartcrop",
    name: "Smart Crop",
    icon: <MdCrop size={20} />,
    param: "fo-auto",
    description: "Focus on the most important part of an image",
  },
];

const AIToolbar = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Disable toolbar if no image is uploaded or if a transformation is in progress

  return (
    <div className="fixed left-16 top-1/2 transform -translate-y-1/2 bg-blue-600 shadow-lg rounded-lg p-2 z-50">
      <div className="flex flex-col gap-3">
        {aiTransformations.map((tool) => (
          <div
            key={tool.id}
            className="relative"
            onMouseEnter={() => setHoveredTool(tool.id)}
            onMouseLeave={() => setHoveredTool(null)}
          >
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-md transition-all ${
                false
                  ? "bg-blue-400 text-white cursor-default"
                  : false
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-400 text-white hover:cursor-pointer"
              }`}
              aria-label={tool.name}
              // disabled={isDisabled || activeTransformation === tool.id}
            >
              {tool.icon}
            </button>

            {/* Tooltip */}
            {hoveredTool === tool.id && (
              <div className="absolute left-16 top-0 bg-gray-800 text-white text-sm rounded py-1 px-2 min-w-[150px] z-50">
                <p className="font-semibold">{tool.name}</p>
                <p className="text-xs text-gray-300">{tool.description}</p>
                {false && (
                  <p className="text-xs text-yellow-300 mt-1">
                    Transformation in progress...
                  </p>
                )}
                {!false && (
                  <p className="text-xs text-red-300 mt-1">
                    Upload an image first
                  </p>
                )}
                {"" === tool.id && (
                  <p className="text-xs text-green-300 mt-1">
                    Currently applied
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIToolbar;
