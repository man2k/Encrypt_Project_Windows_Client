import React from "react";
// import { useState } from "react";

const FormBox = (props) => {
  return (
    <div>
      <form
        id="UploadForm"
        encType="multipart/form-data"
        onSubmit={props.handleForm}
      >
        <input
          type="file"
          name="file"
          onChange={(e) => {
            props.handleFile(e);
          }}
        />
        <button className="file-upload-button" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FormBox;
