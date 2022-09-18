import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Note from "./Note";

import "./Styles/NoteContainer.css";
import { getNotes, reset } from "../../Slices/NoteSlices";
import Spinner from "./Spinner";

const NoteContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { notes, isLoading, isError, message } = useSelector(
    (state) => state.notes
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getNotes());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

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
