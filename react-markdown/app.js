import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [text, setText] = useState("## Markdown Preview");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <textarea
            name="text"
            value={text}
            onChange={handleChange}
            rows="25"
          ></textarea>
        </div>
        <div className="col-md-6">
          <div className="markdown-wrapper">
            <ReactMarkdown className="text-output">{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
