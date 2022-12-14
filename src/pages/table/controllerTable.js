import RoundsService from './../../services/roundsService';
import TeamsService from './../../services/teamsService';

class ControllerTable {

    #table;

    #formatTable = async () => {
        const teamsService = new TeamsService();
        const teams = Object.values(await teamsService.getTeams());
        for (const team of teams) {
            this.#table.set(team.id, {
                id: team.id,
                name: team.nome,
                shield: team.escudos,
                points: 0,
                goals: 0,
                goalsConceded: 0,
                goalsDifference: 0,
                position: 0
            })
        }
    }

    #getAllMatches = async () => {
        const roundsService = new RoundsService();
        for (let i = 1; i <= 38; i++) {
            const matches = (await roundsService.getMatchesPerRounds(i)).matches;
            for (let match of matches) {
                if (match.placar_oficial_visitante === null) continue;
                const points = (a, b) => a > b ? 3 : (a < b ? 0 : 1)
                const houseTeam = this.#table.get(match.clube_casa_id);
                const visitorTeam = this.#table.get(match.clube_visitante_id);

                houseTeam.goals += match.placar_oficial_mandante;
                houseTeam.goalsConceded += match.placar_oficial_visitante;
                houseTeam.points += points(match.placar_oficial_mandante, match.placar_oficial_visitante)
                houseTeam.goalsDifference = houseTeam.goals - houseTeam.goalsConceded;
                
                visitorTeam.goalsConceded += match.placar_oficial_mandante;
                visitorTeam.goals += match.placar_oficial_visitante;
                visitorTeam.points += points(match.placar_oficial_visitante, match.placar_oficial_mandante)
                visitorTeam.goalsDifference = visitorTeam.goals - visitorTeam.goalsConceded;

            }
        }
    }

    createTable = async () => {
        this.#table = new Map();
        await this.#formatTable();
        await this.#getAllMatches();
        let teams = Array.from(this.#table.values());
        teams = teams.sort((a, b) => a.points < b.points);
        return teams.map((team, index) => {
            team.position = index + 1;            
            return team;
        });                  
    }

}

export default ControllerTable;