import { useState } from 'react';
import "./SignupForm.css";
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const SignupForm = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertVariant, setAlertVariant] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.trim() === '') {
          setAlertMessage('O campo Username não pode estar vazio.');
          setAlertVariant('danger');
          return;
        }

        if (user.length < 5) {
            setAlertMessage('O Username deve ter pelo menos 5 caracteres.');
            setAlertVariant('danger');
            return;
        }

        if (password.trim() === '') {
            setAlertMessage('O campo Senha não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }

        if (password.length < 6) {
            setAlertMessage('A Senha deve ter pelo menos 6 caracteres.');
            setAlertVariant('danger');
            return;
        }

        const hasNumber = /\d/;
        const hasLetter = /[a-zA-Z]/;

        if (!hasNumber.test(password) || !hasLetter.test(password)) {
            setAlertMessage('A Senha deve conter pelo menos uma letra e um número.');
            setAlertVariant('danger');
            return;
        }

        axios.post('http://localhost:3000/user/create', { user, password })
        .then(() => {
            setAlertMessage('Cadastro bem-sucedido!');
        })
        .catch(error => {
            setAlertMessage('Erro ao fazer Cadastro. Verifique suas credenciais.');
            setAlertVariant('danger');
            console.error('Erro ao fazer cadastro:', error);
        });

    };
    
    return (
        <Form className='Signup_container' onSubmit={handleSubmit}>
            {alertMessage && (
            <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
                {alertMessage}
            </Alert>
            )}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                            type="text" 
                            placeholder="Enter Username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
  )
}

export default SignupForm