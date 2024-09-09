export const fetchMonsters = async () => {
  try {
      const response = await fetch("https://localhost:3000/monsters", {
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include', // Isso garante que o cookie de autenticação seja enviado
      });

      if (!response.ok) {
          throw new Error("Falha ao buscar os monstros.");
      }

      const data = await response.json();
      // Supondo que o backend retorna uma lista de monstros com { id, name }
      return data.map(monster => monster.id); // Mapeia pelo name
  } catch (error) {
      throw new Error("Falha ao carregar os dados dos monstros.");
  }
};

export const searchMonster = async (id) => {
  if (!id) {
      throw new Error("ID do monstro não fornecido!");
  }

  try {
      const response = await fetch(`https://localhost:3000/monsters/${id}`, {
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include', // Isso garante que o cookie de autenticação seja enviado
      });

      if (!response.ok) {
          throw new Error("Falha ao buscar o monstro.");
      }

      const data = await response.json();
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