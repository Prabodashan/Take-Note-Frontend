import React from "react";
import Note from "./Note";
import "./Styles/NoteContainer.css";

const NoteContainer = (props) => {

  const notes = props.notes;

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container-notes">
        {notes?.length > 0 ? (
          notes.map((item, index) => <Note key={index} note={item} />)
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
