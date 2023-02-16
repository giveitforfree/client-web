import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { extension } from "../../../utils/functions";
import "./index.css";



const DropZone = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const onDrop = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        extension: file.name.split(".").pop(),
      })
    );
    const $attachments = [...attachments, ...files]
    setAttachments($attachments)
  };


  const thumbs = attachments.map((file, idx) => (
    <div key={idx} className="mt-1" title={file.name}>
      <div style={thumb}>
        <div style={thumbInner}>
          {["jpeg", "png", "jpg", "gif", "svg", "bmp"].includes(
            file.extension
          ) ? (
            <img src={file.preview} style={img} />
          ) : (
            extension(file.name, true)
          )}
        </div>
      </div>
      {/* <Tag
        color="red"
        style={{
          marginLeft: "-20px",
          cursor: "pointer",
          verticalAlign: "bottom",
          borderRadius: "50%",
        }}
        onClick={() => this.removeFile(file)}
      >
        x
      </Tag> */}
    </div>
  ));

  return (
    <div style={dropzoneBaseStyle}>
      <Dropzone
        multiple={true}
        onDrop={acceptedFiles => onDrop(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p style={{ margin:'0', textAlign:'center', marginTop:'5px'  }} > click to select files
              </p>
            </div>
          </div>
        )}
      </Dropzone>

      <div style={thumbsContainer}>{thumbs}</div>
    </div>
  );
};

export default DropZone;


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "var(--border)",
  marginBottom: 8,
  marginRight: 8,
  marginLeft: 8,
  width: 60,
  height: 60,
  padding: 4,
  boxSizing: "border-box",
  background: "var(--primary)",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const dropzoneBaseStyle = {
  alignItems: "center",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "var(--ui-colors-donation)",
  borderStyle: "dashed",
  backgroundColor: "transparent",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  minHeight: '330px'
};