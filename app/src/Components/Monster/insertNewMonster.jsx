import { useState } from 'react';
import "./InsertNewMonster.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import axios from 'axios';

const InsertMonster = () => {
    const [alertMessage, setAlertMessage] = useState(null); // Estado para a mensagem de alerta
    const [alertVariant, setAlertVariant] = useState('danger'); // Estado para o tipo de alerta (danger, success, etc.)

    const handleSubmit = (event) => {
        event.preventDefault();

        const monsterName = event.target.formMonsterName.value;
        const monsterType = event.target.formMonsterType.value;
        const monsterSize = event.target.formMonsterSize.value;
        const monsterLanguages = event.target.formMonsterLanguages.value;
        const monsterAlignment = event.target.formMonsterAlignment.value;

        // Validações
        if (monsterName.trim() === '') {
            setAlertMessage('O nome do Monster não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }

        if (monsterName.length < 8) {
            setAlertMessage('O nome do Monster deve ter pelo menos 8 caracteres.');
            setAlertVariant('danger');
            return;
        }

        if (monsterType.trim() === '') {
            setAlertMessage('O tipo do Monster não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }

        if (monsterType.length < 6) {
            setAlertMessage('O tipo do Monster deve ter pelo menos 6 caracteres.');
            setAlertVariant('danger');
            return;
        }

        if (monsterSize.trim() === '') {
            setAlertMessage('O tamanho do Monster não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }

        if (monsterLanguages.trim() === '') {
            setAlertMessage('As linguagens do Monster não podem estar vazias.');
            setAlertVariant('danger');
            return;
        }

        if (monsterAlignment.trim() === '') {
            setAlertMessage('O alinhamento do Monster não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }

        // Limpa a mensagem de alerta ao enviar com sucesso
        setAlertMessage(null);

        const requestBody = {
            name: monsterName,
            type: monsterType,
            size: monsterSize,
            languages: monsterLanguages,
            alignment: monsterAlignment,
        };

        axios.post('https://localhost:3000/monsters/', requestBody, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // Garante que o cookie de autenticação seja enviado
        })
        .then(() => {
            setAlertMessage('Monster criado com sucesso!');
            setAlertVariant('success');
        })
        .catch((error) => {
            setAlertMessage('Erro ao criar Monster.');
            setAlertVariant('danger');
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <Form className='Insert_container' onSubmit={handleSubmit}>
                {alertMessage && (
                    <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
                        {alertMessage}
                    </Alert>
                )}
                <Form.Group className="mb-3" controlId="formMonsterName">
                    <Form.Label>Monster Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Monster Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMonsterType">
                    <Form.Label>Monster Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter Monster Type" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMonsterSize">
                    <Form.Label>Monster Size</Form.Label>
                    <Form.Control type="text" placeholder="Enter Monster Size" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMonsterLanguages">
                    <Form.Label>Monster Languages</Form.Label>
                    <Form.Control type="text" placeholder="Enter Monster Languages" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMonsterAlignment">
                    <Form.Label>Monster Alignment</Form.Label>
                    <Form.Control type="text" placeholder="Enter Monster Alignment" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create Monster
                </Button>
            </Form>
        </div>
    );
}

export default InsertMonster;
