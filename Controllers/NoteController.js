const Note = require("../Models/NoteModel");
const User = require("../Models/UserModel");

// @desc    Get notes
// @route   GET /api/notes
// @access  Private
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    return res.status(200).json(notes);
  } catch (error) {
    return res
      .status(500)
      .json({ message: Object.entries(error.errors)[0][1].message });
  }
};

// @desc    Set note
// @route   POST /api/notes
// @access  Private
const setNote = async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json({ message: "Please add a text field" });
  }
  if (!req.body.title) {
    return res.status(400).json({ message: "Please add a title field" });
  }
  if (!req.body.color) {
    return res.status(400).json({ message: "Please add a color field" });
  }
  try {
    const note = await Note.create({
      color: req.body.color,
      text: req.body.text,
      title: req.body.title,
      user: req.user.id,
    });

    return res.status(200).json(note);
  } catch (error) {
    return res
      .status(500)
      .json({ message: Object.entries(error.errors)[0][1].message });
  }
};

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Private
const updateNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  // Check for user
  if (!req.user) {
    return res.status(401).json({ message: "User not found" });
  }

  // Make sure the logged in user matches the note user
  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedNote);
  } catch (error) {
    return res
      .status(500)
      .json({ message: Object.entries(error.errors)[0][1].message });
  }
};

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Private
const deleteNote = async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return res.status(400).json({ message: "Note not found" });
  }

  // Check for user
  if (!req.user) {
    return res.status(401).json({ message: "User not found" });
  }

  // Make sure the logged in user matches the note user
  if (note.user.toString() !== req.user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }
  try {
    await note.remove();

    return res.status(200).json({ id: req.params.id });
  } catch (error) {
    return res
      .status(500)
      .json({ message: Object.entries(error.errors)[0][1].message });
  }
};

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
