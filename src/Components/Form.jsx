import React, { useState } from "react";
import "./Form.css";
import { uid } from "uid";

const Form = (props) => {
  const { edit, selectedNote, toggleModal, addNote, editNote } = props;

  const [title, setTitle] = useState(edit ? selectedNote?.title || "" : "");
  const [text, setText] = useState(edit ? selectedNote?.text || "" : "");
  const [isActiveForm, setIsActiveForm] = useState(edit);

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const textChangeHandler = (event) => {
    setText(event.target.value);
    setIsActiveForm(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (title.trim() === "" && text.trim() === "") return;

    if (!edit) {
      const note = {
        id: uid(),
        title,
        text,
      };

      addNote(note);
      setIsActiveForm(false);
    } else {
      editNote({
        id: selectedNote.id,
        title,
        text,
      });
      toggleModal();
    }
  };

  const formClickedHandler = () => {
    setIsActiveForm(true);
  };

  return (
    <>
      {!isActiveForm ? (
        <div className="form-container inactive-form" onClick={formClickedHandler}>
          <form>
            <input type="text" className="note-text" placeholder="Take a note..." readOnly />
            <div className="form-actions">
              <div className="tooltip">
                <span className="material-symbols-outlined hover">check_box</span>
                <span className="tooltip-text">New List</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">brush</span>
                <span className="tooltip-text">New Drawing</span>
              </div>
              <div className="tooltip">
                <span className="material-symbols-outlined hover">image</span>
                <span className="tooltip-text">New Image</span>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-container active-form">
          <form onSubmit={submitFormHandler} className={isActiveForm ? "form" : ""}>
            {isActiveForm && (
              <input
                onChange={titleChangeHandler}
                value={title}
                type="text"
                className="note-title"
                placeholder="Title"
              />
            )}

            <input
              onChange={textChangeHandler}
              value={text}
              type="text"
              className="note-text"
              placeholder="Take a note..."
            />

            <div className="form-actions">
              <div className="icons">
                {[
                  "add_alert",
                  "person_add",
                  "palette",
                  "image",
                  "archive",
                  "more_vert",
                  "undo",
                  "redo",
                ].map((icon, index) => (
                  <div className="tooltip" key={index}>
                    <span className="material-symbols-outlined hover small-icon">{icon}</span>
                    <span className="tooltip-text">{icon.replace("_", " ")}</span>
                  </div>
                ))}
              </div>
              <button type="submit" className="close-btn">Close</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;