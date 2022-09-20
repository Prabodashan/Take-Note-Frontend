import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote, updateNote } from "../../Slices/NoteSlices";

import saveIcon from "../../Assets/save.png";
import closeIcon from "../../Assets/close.png";

import "./Styles/Note.css";

const Note = ({ note }) => {
  const [formData, setFormData] = useState({
    title: note.title,
    text: note.text,
    id: note._id,
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <div className="note-top">
        <img
          src={closeIcon}
          alt="DELETE"
          onClick={() => dispatch(deleteNote(note._id))}
        />
      </div>
      <div className="note-body">
        <input
          className="note-title"
          id="title"
          name="title"
          value={formData.title}
          onChange={onChange}
        />
        <textarea
          className="note-text"
          id="text"
          name="text"
          value={formData.text}
          onChange={onChange}
        />
      </div>
      <div className="note-footer">
        <p>{new Date(note.createdAt).toLocaleString("en-US")}</p>
        <img
          src={saveIcon}
          alt="SAVE"
          onClick={() => dispatch(updateNote(formData))}
        />
      </div>
    </div>
  );
};

export default Note;
