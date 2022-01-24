import { Link, useHistory } from "react-router-dom";

//css
import "./NoteList.css";

export default function NoteList({ data: notes }) {
  const history = useHistory();
  //deleting
  const handleClick = (id) => {
    const url = "http://localhost:3000/notes/" + id;
    fetch(url, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  if (notes.length === 0) {
    return <div className="error">No notes to load...</div>;
  }
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="card">
          <h3>{note.title}</h3>
          <div>{note.body.substring(0, 100)}</div>
          <div className="all-link">
            <Link to={`/notes/${note.id}`}>View</Link>
            {/* <Link>Edit</Link> */}
            <Link
              onClick={() => {
                handleClick(note.id);
              }}
            >
              Delete
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
