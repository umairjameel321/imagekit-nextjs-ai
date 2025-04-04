import ImageKitAITransformation from "@/components/ImageKitAITransformation";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 gap-8 pl-20 text-black">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-1">Image Upload</h1>
        <p>Upload your images to ImageKit</p>
      </div>

      <ImageKitAITransformation />
    </div>
  );
}
