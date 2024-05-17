import React from 'react'
import ListGroup from 'react-bootstrap';
import PropTypes from 'prop-types';

const Tasks = ({ tareas }) => {
  return (
    <div>
        <ListGroup as="ol" numbered>
            {tareas.map((task, index) => (
                <ListGroup.Item as= "li" key={index}>{task.task}</ListGroup.Item>
            ))}
        </ListGroup>
    </div>
  )
}

Tasks.PropTypes = {
    tareas: PropTypes.array
};

export default Tasks