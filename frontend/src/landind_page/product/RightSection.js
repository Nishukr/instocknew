import React from "react";

function RightSection({ imageURL, productName, productDesription, imageStyle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", flexDirection: "row-reverse" }}>
      <img 
        src={imageURL} 
        alt={productName} 
        style={{ 
          width: "500px",   // Increased size
          height: "350px",  // Increased size
          objectFit: "cover", 
          maxWidth: "100%", // Ensures responsiveness
          borderRadius: "10px", // Smooth corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow effect
          ...imageStyle 
        }} 
      />
      <div style={{ marginRight: "20px" }}>
        <h3>{productName}</h3>
        <p>{productDesription}</p>
      </div>
    </div>
  );
}

export default RightSection;
