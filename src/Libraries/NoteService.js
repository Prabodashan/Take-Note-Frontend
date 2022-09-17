import axios from "axios";

const API_URL = "/api/notes/";

// Create new note
const create = async (noteData, token) => {
  console.log(noteData);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, noteData, config);

  return response.data;
};

const noteService = {
  create,
};

export default noteService;
