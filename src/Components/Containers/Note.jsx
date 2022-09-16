import React from "react";

import deleteIcon from "../../Assets/delete.svg";

import "./Styles/Note.css";

const Note = (props) => {
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <input className="note-title" />
      <textarea className="note-text" />
      <div className="note-footer">
        <p>10: 18 PM 2022 / 09 / 16</p>
        <img src={deleteIcon} alt="DELETE" />
      </div>
    </div>
  );
};

export default Note;
