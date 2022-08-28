import RoundsService from "../../services/roundsService"

class RoundsController {
    getRounds = async () => {
        const roundsService = new RoundsService()
        const list = await roundsService.getRoundsList();
        return list;
    }

    getMatches = async (id) => {
        const roundsService = new RoundsService()
        const data = await roundsService.getMatchesPerRounds(id);
        const matches = data.matches;
        const teams = data.teams;
        return matches.map((matche) => {
            const visitor = teams[matche.clube_visitante_id];
            const homeTeam = teams[matche.clube_casa_id];
            return {
                visitor: {
                    name: visitor.nome,
                    position: matche.clube_visitante_posicao,
                    point: matche.placar_oficial_visitante,
                    shield: visitor.escudos
                },
                homeTeam: {
                    name: homeTeam.nome,
                    position: matche.clube_casa_posicao,
                    point: matche.placar_oficial_mandante,
                    shield: homeTeam.escudos
                },
                data: matche.partida_data,
                where: matche.local
            }
        });
    }
}

export default RoundsController;