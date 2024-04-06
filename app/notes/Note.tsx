"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Notes.module.css";

export default function Note({ note }: any) {
  const { id, title, content, created } = note;
  const router = useRouter();

  const deleteNote = async (id: string) => {
    await fetch(`https://simple-notes.fly.dev/api/collections/notes/records/${id}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <div className={styles.note}>
      <Link href={`/notes/${id}`}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteNote(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
