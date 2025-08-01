import { useState } from "react";
import { format } from "date-fns";
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

function NoteForm({ notes, setNotes }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleFormToggle = () => {
    setIsFormOpen((prev) => !prev);
  };

  const [formData, setFormData] = useState(initialState);
  // const handleFormInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleFormInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotes = {
      id: Date.now(),
      dateCreated: format(new Date(), "hh:mm a, dd/MM/yyyy"),
      ...formData,
    };

    setNotes([newNotes, ...notes]);
    setFormData(initialState);
  };

  return (
    <div className="max-w-2xl mx-auto m-6 p-4 border-2 rounded-md shadow-md bg-gray-100">
      <div className="flex justify-center my-3">
        {!isFormOpen && <Button onClick={handleFormToggle} text="Add note" />}
      </div>
      {isFormOpen && (
        <div>
          <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
            <TextInput
              name="title"
              label="Title"
              value={formData.title}
              onChange={handleFormInput}
              required={true}
            />
            <SelectInput
              name="priority"
              label="Priority"
              value={formData.priority}
              onChange={handleFormInput}
              options={priorityOptions}
            />
            <SelectInput
              name="category"
              label="Category"
              value={formData.category}
              onChange={handleFormInput}
              options={categoryOptions}
            />

            <TextAreaInput
              name="description"
              label="Description"
              value={formData.description}
              onChange={handleFormInput}
              required={true}
            />
            <div className="flex justify-end gap-4 mt-4">
              <Button text="Save note" type="submit" />
              <Button onClick={handleFormToggle} text="Cancel" name="delete" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NoteForm;
