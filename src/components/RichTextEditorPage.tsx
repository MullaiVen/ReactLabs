import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Typography } from "@mui/material";

const RichTextEditor = ({ value, onChange }) => {
  const handleChange = (content, delta, source, editor) => {
    onChange(content);
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
    />
  );
};

const RichTextEditorPage = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        Rich Text Editors
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Visualize user data in a rich text editor and integrate editors with
        formatting options (bold, italic, underline, lists).
      </Typography>
      <RichTextEditor value={editorValue} onChange={setEditorValue} />
    </>
  );
};

export default RichTextEditorPage;
