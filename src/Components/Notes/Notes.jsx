import "./Notes.css";
import Note from './Note';


const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;

  if (notes.length === 0) {
    return (
      <div className="notes">
        <p>Notes you add appear here.</p>
      </div>
    );
  }

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id} // Use note.id instead of index
          note={note} // Pass the whole note object
          deleteNote={deleteNote}
          toggleModal={toggleModal}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
};

export default Notes;