import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../Slices/NoteSlices";

import "./Styles/Custom.css";

import NoteContainer from "../Components/Containers/NoteContainer";
import SideBar from "./../Components/Containers/SideBar";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const addNote = (color) => {
    dispatch(createNote({ color, title: "title", text: "text" }));
  };

  return (
    <div className="home-container">
      <SideBar addNote={addNote} />
      <NoteContainer />
    </div>
  );
};

export default Home;
