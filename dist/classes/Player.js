export default class Player {
    playerName;
    goalsScored;
    constructor(playerName, goalsScored) {
        this.playerName = playerName;
        this.goalsScored = goalsScored;
    }
    setPlayerName(playerName) {
        this.playerName = playerName;
    }
    getPlayerName() {
        return this.playerName;
    }
    setGoalsScored(goalsAmount) {
        this.goalsScored = goalsAmount;
    }
    getGoalsScored() {
        return this.goalsScored;
    }
}
