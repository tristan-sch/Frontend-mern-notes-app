import React, { useState } from "react";
import axios from "axios";

function CreateNote() {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newNote = {
      title: input.title,
      content: input.content,
    };
    axios.post("https://backend-mern-notes-app.vercel.app/create", newNote);
  }

  return (
    <div className="container">
      <h1>Create Note page</h1>
      <form>
        <div className="form-group">
          <input
            onChange={handleChange}
            value={input.title}
            name="title"
            autoComplete="off"
            className="form-control"
            placeholder="node title"
          ></input>
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            value={input.content}
            name="content"
            autoComplete="off"
            className="form-control"
            placeholder="node content"
          ></textarea>
        </div>
        <button onClick={handleClick} className="btn btn-lg btn-info">
          Add note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
