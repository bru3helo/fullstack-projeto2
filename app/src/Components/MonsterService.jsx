import axios from "axios";

export const fetchMonsters = async () => {
  try {
    const response = await axios.get("http://localhost:3000/monsters/");
    const data = response.data;
    return data.results.map(monster => monster.index); // Mapeia pelo id (index)
  } catch (error) {
    throw new Error("Falha ao carregar os dados dos monstros.");
  }
};

export const searchMonster = async (index) => {
  if (name === "") {
    throw new Error("Digite o nome do monstro!!!");
  }

  try {
    const response = await axios.get(`http://localhost:3000/monsters/${index}`);
    const data = response.data;
    return {
      name: data.name,
      type: data.type,
      size: data.size,
      languages: data.languages,
      alignment: data.alignment
    };
  } catch (error) {
    throw new Error(`Não foi possível encontrar o monstro: ${error.message}`);
  }
};
