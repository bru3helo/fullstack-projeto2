import {} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap'; // Supondo que você esteja usando Bootstrap

const CreateMonstersButton = () => {

    const handleCreateMonsters = async () => {
        try {
            const response = await axios.post('http://localhost:3000/install'); // Ajuste a URL se necessário
            alert(response.data.message);
        } catch (error) {
            console.error('Erro ao criar monstros:', error);
            alert('Erro ao criar monstros.');
        }
    };

    return (
        <Button onClick={handleCreateMonsters} href="/fullstack-projeto2/install" variant="dark">
            Criar Monstros
        </Button>
    );
};

export default CreateMonstersButton;