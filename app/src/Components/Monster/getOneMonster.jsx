import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

const FindMonster = () => {
    const [monsterId, setMonsterId] = useState('');
    const [monster, setMonster] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertVariant, setAlertVariant] = useState('danger');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (monsterId.trim() === '') {
            setAlertMessage('O ID do monstro não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }

        axios.get(`http://localhost:3000/${monsterId}`, {
            withCredentials: true, // Garante que o cookie de autenticação seja enviado
        })
        .then((response) => {
            const data = response.data;
            if (data.message) {
                setAlertMessage(data.message);
                setAlertVariant('danger');
            } else {
                setMonster(data);
                setAlertMessage(null);
            }
        })
        .catch((error) => {
            setAlertMessage('Erro ao buscar o monstro.');
            setAlertVariant('danger');
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formMonsterId">
                    <Form.Label>Monster ID</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Monster ID"
                        value={monsterId}
                        onChange={(e) => setMonsterId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Find Monster
                </Button>
            </Form>

            {alertMessage && (
                <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
                    {alertMessage}
                </Alert>
            )}

            {monster && (
                <Card className="mt-4">
                    <Card.Body>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Type: {monster.type}</Card.Subtitle>
                        <Card.Text>
                            <strong>Size:</strong> {monster.size} <br />
                            <strong>Languages:</strong> {monster.languages} <br />
                            <strong>Alignment:</strong> {monster.alignment}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default FindMonster;
