import { Link } from "react-router-dom";

//css
import "./NoteList.css";

export default function NoteList({ data: notes }) {
  if (notes.length === 0) {
    return <div className="error">No notes to load...</div>;
  }
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="card">
          <h3>{note.title}</h3>
          <div>{note.body.substring(0, 100)}</div>

          <Link to={`/notes/${note.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
