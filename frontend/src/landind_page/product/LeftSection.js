import React from "react";

function LeftSection({ imageURL, productName, productDesription, imageStyle }) {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      <img src={imageURL} alt={productName} style={{ width: "300px", height: "200px", objectFit: "cover", ...imageStyle }} />
      <div style={{ marginLeft: "20px" }}>
        <h3>{productName}</h3>
        <p>{productDesription}</p>
      </div>
    </div>
  );
}

export default LeftSection;
