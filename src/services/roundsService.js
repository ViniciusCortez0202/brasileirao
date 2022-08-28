import URL from './config';

class RoundsService{
    getRoundsList = async () => {
        try {
            const result = await fetch(`${URL}/rodadas`);
            const rounds = await result.json();
            return rounds;
        } catch (error) {
            throw error;
        }
    }

    getMatchesPerRounds = async (id) => {
        try {
            const result = await fetch(`${URL}/partidas/${id}`);
            const data = await result.json();
            return {teams: data.clubes, matches: data.partidas};
        } catch (error) {
            throw error;
        }
    }
}

export default RoundsService;