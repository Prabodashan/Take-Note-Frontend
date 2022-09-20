import axios from "axios";

const API_URL = "/api/notes/";

// Create new note
const create = async (noteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, noteData, config);

  return response.data;
};

// Update new note
const update = async (noteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + noteData.id, noteData, config);

  return response.data;
};

// Get new note
const get = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user goal

const deletes = async (noteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + noteId, config);

  return response.data;
};

const noteService = {
  create,
  get,
  deletes,
  update,
};

export default noteService;
