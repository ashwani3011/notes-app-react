import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
// css
import "./Home.css";

//component

import NoteList from "../components/NoteList";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore.collection("notes").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No notes to load...");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err);
        isPending(false);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div>
      {isPending && <div>Loading Notes....</div>}
      {error && <div>Unable to load the notes</div>}
      {data && <NoteList data={data} />}
    </div>
  );
}
