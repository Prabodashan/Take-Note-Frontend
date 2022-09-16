import React, { useState } from "react";
import "./Styles/Custom.css";

import NoteContainer from "../Components/Containers/NoteContainer";
import SideBar from "./../Components/Containers/SideBar";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      color,
    });
    setNotes(tempNotes);
  };

  return (
    <div className="home-container">
      <SideBar addNote={addNote} />
      <NoteContainer notes={notes} />
    </div>
  );
};

export default Home;
