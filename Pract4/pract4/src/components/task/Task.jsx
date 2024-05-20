import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Task = ({ tasks, deleteTask, completeTask }) => {
  return (
    <div>
      <ListGroup as="ol" numbered>
        {tasks.map((task, index) => (
          <ListGroup.Item as="li" key={index} className="task-conteiner">
            <div
              style={{
                textDecoration: task.complete ? "line-through" : "none",
                color: task.complete ? "grey" : "inherit",
              }}
            >
              {task.name}
            </div>
            <div className="container">
              {!task.complete ? (
                <Button
                  variant="success"
                  id="button-addon2"
                  onClick={() => completeTask(task.id)}
                >
                  Complete
                </Button>
              ) : (
                ""
              )}
              <Button
                variant="danger"
                id="button-addon2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

Task.PropTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  completeTask: PropTypes.func.isRequired,
};

export default Task;
