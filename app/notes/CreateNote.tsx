"use client";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  return (
    <div>
      <h1>Create Note</h1>
      <form>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <label>
          Content
          <textarea name="content" />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
