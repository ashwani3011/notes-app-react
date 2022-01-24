import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

// css
import "./Notes.css";

export default function Notes() {
  const { id } = useParams();
  const url = "http://localhost:3000/notes/" + id;
  const { isPending, error, data: notes } = useFetch(url);
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
        </>
      )}
    </div>
  );
}
