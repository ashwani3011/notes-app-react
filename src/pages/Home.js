import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
// css
import "./Home.css";

//component

import NoteList from "../components/NoteList";

export default function Home() {
  const [url, setUrl] = useState("http://localhost:3000/notes");
  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && <div>Loading Notes....</div>}
      {error && <div>Unable to load the notes</div>}
      {data && <NoteList data={data} />}
    </div>
  );
}
