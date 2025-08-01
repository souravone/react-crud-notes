import Button from "./ui/Button";

function Notelists({ notes, deleteNote, onEdit }) {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {notes.map((note) => (
          <div
            className={`border-2 flex flex-col gap-1 p-4 rounded-md shadow-md ${
              note.priority === "high"
                ? "bg-rose-200"
                : note.priority === "medium"
                ? "bg-sky-200"
                : "bg-emerald-200"
            }`}
            key={note.id}
          >
            <h3 className="font-bold text-lg">{note.title}</h3>
            <h4 className="font-medium text-sm text-gray-400">
              Created at {note.dateCreated}
            </h4>
            <div className="flex justify-between">
              <h4 className="text-sm text-gray-500 font-semibold">
                {note.priority}
              </h4>
              <h4 className="text-sm text-gray-500 font-semibold">
                {note.category}
              </h4>
            </div>
            <p className="mt-1.5">{note.description}</p>
            <div className="flex justify-end gap-3 mt-4">
              <Button
                text="Edit"
                name="secondary"
                onClick={() => onEdit(note)}
              />
              <Button
                text="Delete"
                name="delete"
                onClick={() => deleteNote(note.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notelists;
