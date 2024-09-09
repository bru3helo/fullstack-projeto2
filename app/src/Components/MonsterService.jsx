

export const fetchMonsters = async () => {
  try {
    const response = await fetch("http://localhost:3000/monsters");
    if (!response.ok) {
      throw new Error("falha ao buscar!");
    }
    const data = await response.json();
    return data.results.map(monster => monster.name);
  } catch (error) {
    throw new Error("Falha ao carregar os dados dos montros.");
  }
};

export const searchMonster = async (name) => {
  try {
    const response = await fetch(`http://localhost:3000/monsters/${name}`);
    if (!response.ok) {
      throw new Error("Verifique novamente o nome do monstro!!!");
    }
    if(name === ""){
      throw new Error("Digite o nome do monstro!!!");
    }else{
      const data = await response.json();
      return {
        name: data.name,
        type: data.type,
        size: data.size,
        languages: data.languages,
        alignment: data.alignment
      };
    }

  } catch (error) {
    throw new Error(`Não foi possivel encontrar, ${error.message}`);
  }
};