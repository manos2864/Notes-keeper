import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const onDeleteHandler = id => {
    const newArray = notes.filter((item, index) => index !== id);
    setNotes(newArray);
  };

  const onAddHandler = event => {
    if (title && desc) {
      setNotes([...notes, { title: title, desc: desc }]);
      setTitle("");
      setDesc("");
    }

    event.preventDefault();
  };

  return (
    <div>
      <Header />
      <CreateArea
        onAddHandler={onAddHandler}
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
      />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.desc}
          onDeleteHandler={onDeleteHandler}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
