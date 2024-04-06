import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";
import Note from "./Note";

async function getNotes() {
  const res = await fetch(
    "https://simple-notes.fly.dev/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();

  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}