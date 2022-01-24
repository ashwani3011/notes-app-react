import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@material-ui/core";
// styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const tagInput = useRef(null);
  const history = useHistory();
  const { postData, data, error } = useFetch(
    "http://localhost:3000/notes",
    "POST"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, method);
    postData({
      title,
      tags,
      body,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const tag = newTag.trim();

    if (tag && !tags.includes(tag)) {
      setTags((prevTags) => [...prevTags, newTag]);
    }
    setNewTag("");
    tagInput.current.focus();
  };

  // redirecting to home after creating a notes

  // useEffect(() => {
  //   if (data) {
  //     history.push("/");
  //   }
  // }, [data, history]);

  return (
    <div className="create">
      <h2 className="page-title">Create a New Note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            className="input"
          />
        </label>

        <label>
          <span>Thought:</span>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          />
        </label>

        <label>
          <span>Related Tags:</span>
          <div className="tags">
            <input
              type="text"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              ref={tagInput}
              className="input"
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Tags:{" "}
          {tags.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="formSubmitBtn"
        >
          Create
        </Button>
      </form>
    </div>
  );
}
