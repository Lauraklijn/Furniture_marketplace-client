import React, { useState } from "react";

function AddImage(props) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleImageState } = props;

  const uploadImage = handleImageState => async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Moodboard");
    setLoading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cloud-laura/image/upload",
      {
        method: "post",
        body: data
      }
    );

    const file = await res.json();
    console.log("image Url ", file);
    setImage(file.secure_url);
    setLoading(false);
    handleImageState(file.secure_url);
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage(handleImageState)}
        onChange={handleImageState}
      />

      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} alt="" style={{ width: "300px" }} />
      )}
    </div>
  );
}

export default AddImage;
