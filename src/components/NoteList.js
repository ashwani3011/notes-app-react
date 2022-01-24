import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
//css
import "./NoteList.css";
import { projectFirestore } from "../firebase/config";

export default function NoteList({ data: notes }) {
  const history = useHistory();
  //deleting
  const handleClick = (id) => {
    console.log("clicked");
    projectFirestore.collection("notes").doc(id).delete();
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
            <Link to={`/notes/${note.id}`}>
              <Button variant="contained" color="primary" className="view-btn">
                View
              </Button>
            </Link>
            {/* <Link>Edit</Link> */}
            <Link
              onClick={() => {
                handleClick(note.id);
              }}
            >
              <Button variant="outlined" color="primary">
                Delete
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
