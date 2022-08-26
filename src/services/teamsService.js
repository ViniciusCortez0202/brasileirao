import URL from './config';

class TeamsService {
    getTeams = async () => {
        try {
            const result = await fetch(`${URL}/partidas`);
            const teams = await result.json();
            return teams.clubes;
        } catch (error) {
            throw error;
        }   
    }

    getPlayers = async (id) => {
        try {
            const result = await fetch(`${URL}/atletas/mercado/${id}`)
            const data = await result.json();
            return {positions: data.posicoes, players: data.atletas};
        } catch (error) {
            throw error;
        }
    }
}    

export default TeamsService