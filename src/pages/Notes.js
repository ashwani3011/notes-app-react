import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@material-ui/core";
// css
import "./Notes.css";

export default function Notes() {
  const { id } = useParams();
  const url = "http://localhost:3000/notes/" + id;
  const { isPending, error, data: notes } = useFetch(url);
  const history = useHistory();

  // delete notes

  const handleClick = () => {
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

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

          <Button onClick={handleClick} variant="outlined" color="primary">
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
