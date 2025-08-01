import { useEffect, useState } from "react";
import Button from "./ui/Button";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

const initialState = {
  title: "",
  priority: "medium",
  category: "others",
  description: "",
};

const priorityOptions = [
  { name: "High", value: "high" },
  { name: "Medium", value: "medium" },
  { name: "Low", value: "low" },
];

const categoryOptions = [
  { name: "Office", value: "office" },
  { name: "Personal", value: "Personal" },
  { name: "Others", value: "others" },
];

function EditNoteModal({ note, onSave, onClose }) {
  const [editedNoteData, setEditedNoteData] = useState(initialState);

  useEffect(() => {
    if (note) {
      setEditedNoteData({
        title: note.title,
        priority: note.priority || "medium",
        category: note.category || "others",
        description: note.description,
      });
    }
  }, [note]);

  const handleChange = (e) => {
    setEditedNoteData({ ...editedNoteData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...note,
      ...editedNoteData,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm  z-50">
      <div className="w-full max-w-2xl mx-auto m-6 p-4 border-2 rounded-md shadow-md bg-gray-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
          <TextInput
            name="title"
            label="Title"
            value={editedNoteData.title}
            onChange={handleChange}
            required={true}
          />
          <SelectInput
            name="priority"
            label="Priority"
            value={editedNoteData.priority}
            onChange={handleChange}
            options={priorityOptions}
          />
          <SelectInput
            name="category"
            label="Category"
            value={editedNoteData.category}
            onChange={handleChange}
            options={categoryOptions}
          />

          <TextAreaInput
            name="description"
            label="Description"
            value={editedNoteData.description}
            onChange={handleChange}
            required={true}
          />
          <div className="flex justify-end gap-4 mt-4">
            <Button text="Save note" type="submit" />
            <Button onClick={onClose} text="Cancel" name="delete" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNoteModal;
