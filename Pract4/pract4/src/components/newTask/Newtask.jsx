import React, { useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./NewTask.css";

const NewTask = ({ onHandleAddNewTask }) => {
  const [textTask, setTextTask] = useState("");

  const handleNewTask = (e) => {
    setTextTask(e.target.value);
  };
  const handleAddNewTask = (e) => {
    e.preventDefault();
    onHandleAddNewTask(textTask);
    setTextTask("");
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          className="task-back"
          placeholder="Add Task"
          aria-describedby="basic-addon2"
          value={textTask}
          onChange={handleNewTask}
        />
        <Button variant="light" id="button-addon2" onClick={handleAddNewTask}>
          Add
        </Button>
      </InputGroup>
    </div>
  );
};
NewTask.PropTypes = {
  onHandleAddNewTask: PropTypes.func.isRequired,
};

export default NewTask;
