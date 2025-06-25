import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const ImageCompressor = () => {
  const [compressedFile, setCompressedFile] = useState(null);
  const [originalSize, setOriginalSize] = useState(null);
  const [compressedSize, setCompressedSize] = useState(null);

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return;

    setOriginalSize((imageFile.size / (1024 * 1024)).toFixed(2)); // MB

    const options = {
      maxSizeMB: 50,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    try {
      const compressed = await imageCompression(imageFile, options);
      setCompressedSize((compressed.size / (1024 * 1024)).toFixed(2));
      setCompressedFile(compressed);
    } catch (error) {
      console.error("Compression failed:", error);
    }
  };

  const downloadCompressed = () => {
    if (!compressedFile) return;
    const url = URL.createObjectURL(compressedFile);
    const link = document.createElement("a");
    link.href = url;
    link.download = "compressed_image.jpg";
    link.click();
  };

  return (
    <div style={styles.container}>
      <h2>Image Compressor</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {originalSize && (
        <p>Original Size: <strong>{originalSize} MB</strong></p>
      )}
      {compressedSize && (
        <p>Compressed Size: <strong>{compressedSize} MB</strong></p>
      )}
      {compressedFile && (
        <button onClick={downloadCompressed} style={styles.button}>
          Download Compressed Image
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "500px",
    margin: "auto"
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#0d6efd",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default ImageCompressor;
