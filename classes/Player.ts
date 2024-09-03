export default class Player {
    playerName: string;
    goalsScored: number;
    constructor(playerName: string, goalsScored: number) {
        this.playerName = playerName;
        this.goalsScored = goalsScored;
    }

    setPlayerName(playerName: string) {
        this.playerName = playerName;
    }

    getPlayerName() {
        return this.playerName;
    }

    setGoalsScored(goalsAmount: number) {
        this.goalsScored = goalsAmount;
    }

    getGoalsScored() {
        return this.goalsScored;
    }
}