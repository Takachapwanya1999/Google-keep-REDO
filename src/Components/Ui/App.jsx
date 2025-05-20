// App.js
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Form from './Components/Form/Form';

const NOTES = [];

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState(null); // Set initial value to null
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };
const editNote = (editedNote) => {
  setNotes((prevNotes) => {
    const newArray = prevNotes.map((note) => {
      if (editedNote.id === note.id) {
        note.title = editedNote.title;
        note.text = editedNote.text;
      }
      return note;
    });
    return newArray;
  });
};

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => id !== note.id));
  };

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote} />
      )}
    </div>
  );
};

export default App;