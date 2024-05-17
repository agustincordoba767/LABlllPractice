import React, { useState } from 'react'
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import PropTypes from 'prop-types'

const Newtask = ({onHandleAddNewTask}) => {

    const[enteredTask, setEnteredTask] = useState("");
    

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Ingresar tarea"
                    aria-label="Ingresar tarea"
                    aria-describedby="basic-addon2"
                />
                <Button variant="dark" id="button-addon2" onClick={onHandleAddNewTask}>
                    Agregar
                </Button>
            </InputGroup>
        </div>
    )
};
Newtask.PropTypes = {
    onHandleAddNewTask: PropTypes.func.isRequired
}

export default Newtask