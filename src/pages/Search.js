import { useFetch } from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import NoteList from "../components/NoteList";

// styles
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/notes?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Notes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <NoteList data={data} />}
    </div>
  );
}
