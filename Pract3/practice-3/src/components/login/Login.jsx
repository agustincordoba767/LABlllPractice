import { Container, Form } from 'react-bootstrap'
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const [username, setUserName] = useState('');

    const handleUserName = (e) => {
        const value = e.target.value;
        setUserName(value);
        if (value.includes('o') || value.includes('O')) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
    };

    const handleRegister = () => {

        if (username === '' || username.toLowerCase().includes('o')) {
            alert("Usuario inválido para registrarse");
        } else {
            alert("¡Usuario registrado correctamente!");
        }
        setUserName('');
    };

    return (

        <Container>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">→</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleUserName}
                    value={username}
                />
            </InputGroup>
            <Button variant="dark"
                onClick={handleRegister}>Registrarse
            </Button>
            <p>Nombre de usuario ingresado: {username}</p>
        </Container>



    )

}
export default Login