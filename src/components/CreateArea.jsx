import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = props => {
  const [isPopOpen, setIsPopOpen] = useState(false);

  return (
    <div>
      <form className="create-note">
        {isPopOpen && (
          <input
            name="title"
            onChange={e => props.setTitle(e.target.value)}
            value={props.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={e => props.setDesc(e.target.value)}
          value={props.desc}
          placeholder="Take a note..."
          rows={isPopOpen ? "3" : "1"}
          onClick={() => setIsPopOpen(true)}
        />
        <Zoom in={isPopOpen}>
          <Fab onClick={props.onAddHandler}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
