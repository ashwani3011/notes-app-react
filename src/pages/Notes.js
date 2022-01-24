import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
// css
import "./Notes.css";
// import { useEffect } from "react";

export default function Notes() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState(null);
  const { id } = useParams();

  //useEffect

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("notes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setNotes(doc.data());
        } else {
          setIsPending(false);
          setError(`Could not find that notes`);
        }
      });
  }, [id]);

  // delete notes

  // const handleClick = () => {
  //   fetch(url, {
  //     method: "DELETE",
  //   }).then(() => {
  //     history.push("/");
  //   });
  // };

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {notes && (
        <>
          <h2 className="page-title">{notes.title}</h2>

          <ul>
            {notes.tags.map((tag) => (
              <li className="" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <p className="method">{notes.body}</p>

          {/* <button onClick={handleClick}>Delete</button> */}

          {/* <Button onClick={handleClick} variant="outlined" color="primary">
            Delete
          </Button> */}
        </>
      )}
    </div>
  );
}
