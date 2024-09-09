import { useState } from 'react';
import "./LoginForm.css";
import { Link } from 'react-router-dom';
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const LoginForm = () => {

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
    

        axios.post('https://localhost:3000/user/login', { user, password }, { withCredentials: true })
            .then(response => {
                // Resgatar o cookie da resposta
                const cookies = response.headers['set-cookie'];
                console.log('Cookies:', cookies);
            
                setAlertMessage('Login bem-sucedido!');
                setAlertVariant('success');
            })
            .catch(error => {
                setAlertMessage('Erro ao fazer login. Verifique suas credenciais.');
                setAlertVariant('danger');
                console.error('Erro ao fazer login:', error);
            });
    };

    
    return (
        <Form className='Login_container' onSubmit={handleSubmit}>
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
                Login
            </Button>
            <Form.Group className="signup" controlId="formBasicSignup">
                <Form.Text className="text-muted">
                Do not have a account?
                </Form.Text>
                <Link to= "/fullstack-projeto2/user/create" variant="primary" type="submit">
                Register
                </Link>
            </Form.Group>
        </Form>
  )
}

export default LoginForm