import { useRef, useState } from "react";

export default function ProfileCard() {
  const [imageSrc, setImageSrc] = useState("");
  const fileInputRef = useRef(null);

  // Open file button click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // both click & drop file 
  const handleImageChange = (event) => {
    const file = event.target.files?.[0] || event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  // Prevent default behavior
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="p-2 rounded-xl shadow text-center bg-[#F9F9F9]">
      {imageSrc ? (
        <img src={imageSrc} alt="Profile" className="w-30 h-30 rounded-full mx-auto shadow" />
      ) : (
        <div className="w-24 h-24 mt-8 mx-auto rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
          No Image
        </div>
      )}

      <div
        className="b mt-4 border-dashed b-2 border-slate-300 p-4 text-gray-500 hover:bg-gray-100 transition w-70 m-auto"
        onClick={handleUploadClick}
        onDrop={handleImageChange}
        onDragOver={handleDragOver}
      >
        Drag and drop an image here, or click to upload
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImageChange}
      />

      <button onClick={handleUploadClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded transition cursor-pointer ">
         Upload Image
       </button>
    </div>
  );
}
