import Player from "./Player.js";
const playersArr = [{ playerName: "Cristiano Ronaldo", goalsScored: 763 }, { playerName: "Neymar", goalsScored: 360 }, { playerName: "Leo Messi", goalsScored: 735 }];
export default class Players {
    constructor() {
        playersArr.forEach((x) => {
            const p = new Player(x.playerName, x.goalsScored);
        });
        this.render();
    }
    render() {
        const app_container = document.getElementById("app_container");
        const player_div = document.getElementById("player_div");
        const getPlayerBtn = document.createElement("button");
        getPlayerBtn.innerText = "Get a player!";
        app_container?.appendChild(getPlayerBtn);
        getPlayerBtn?.addEventListener("click", () => {
            player_div.innerText = playersArr[this.getRandomPlayer()].playerName;
        });
    }
    getRandomPlayer() {
        const index = Math.floor(Math.random() * playersArr.length);
        return index;
    }
}
