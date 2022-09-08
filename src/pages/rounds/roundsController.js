import RoundsService from "../../services/roundsService"


class RoundsController {
    getRounds = async () => {
        const roundsService = new RoundsService()
        const list = await roundsService.getRoundsList();
        const currentWeek = this.getWeek(new Date()) - 1;
        return list.map((round) => {

            const week = this.getWeek(new Date(round.inicio.substring(0, round.inicio.indexOf(' ')))) - 1;
            const begin = `${round.inicio.substring(8, 10)}/${round.inicio.substring(5, 7)}`;
            const end = `${round.fim.substring(8, 10)}/${round.fim.substring(5, 7)}`;
            return {
                id: round.rodada_id,
                begin: begin,
                end: end,
                isCurrentRound: currentWeek === week
            }
        })
    }

    getWeek = (date) => {        
        const oneJan = new Date(date.getFullYear(), 0, 1);
        const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));        
        return  Math.ceil((date.getDay() + 1 + numberOfDays) / 7);;
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