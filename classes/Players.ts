type Player = { playerId: string, playerName: string, goalsScored: number };
const database: Array<Player> = [{ playerId: crypto.randomUUID(), playerName: "Cristiano Ronaldo", goalsScored: 763 }, { playerId: crypto.randomUUID(), playerName: "Lionel Messi", goalsScored: 735 }, { playerId: crypto.randomUUID(), playerName: "Neymar Jr.", goalsScored: 360 }, { playerId: crypto.randomUUID(), playerName: "Sandro Tonali", goalsScored: 26 }];
let pickedPlayers: Array<number> = [];
let pickedPlayersStrings: Array<string> = [];
const app_container = document.getElementById("app_container");
export default class Players {
    constructor() {
        this.render();
    }

    render() {
        console.log(pickedPlayersStrings);
        app_container!.innerHTML = "";
        const sortedPlayerDiv = document.createElement("div");
        sortedPlayerDiv.style.height = "20px";
        const pickedPlayersDiv = document.createElement("div");
        const getPlayerBtn = document.createElement("button");
        app_container?.appendChild(sortedPlayerDiv);
        app_container?.appendChild(getPlayerBtn);
        app_container?.appendChild(pickedPlayersDiv);
        getPlayerBtn.innerText = pickedPlayers.length < 8 ? "Get a player!" : "Get result!";
        getPlayerBtn?.addEventListener("click", () => {
            if (pickedPlayers.length <= 7) {
                const index = this.getRandomPlayer();
                const sortedPlayer = database[index];
                const buttonsDiv = document.createElement("div");
                let goalsScoredAfterChoose = 0;

                sortedPlayerDiv!.innerText = `${sortedPlayer.playerName}`;
                app_container?.removeChild(getPlayerBtn);

                const carrerBtn = document.createElement("button");
                carrerBtn.innerText = "Carrer";
                carrerBtn.addEventListener("click", () => {
                    goalsScoredAfterChoose = database[index].goalsScored;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });

                const doubleBtn = document.createElement("button");
                doubleBtn.innerText = "Double";
                doubleBtn.addEventListener("click", () => {
                    goalsScoredAfterChoose = database[index].goalsScored * 2;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });

                const tripleBtn = document.createElement("button");
                tripleBtn.innerText = "Triple";
                tripleBtn.addEventListener("click", () => {
                    goalsScoredAfterChoose = database[index].goalsScored * 3;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });

                const quadrupleBtn = document.createElement("button");
                quadrupleBtn.innerText = "Quadruple";
                quadrupleBtn.addEventListener("click", () => {
                    goalsScoredAfterChoose = database[index].goalsScored * 4;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });

                buttonsDiv.append(carrerBtn, doubleBtn, tripleBtn, quadrupleBtn);
                sortedPlayerDiv?.appendChild(buttonsDiv);

            } else if (pickedPlayers.length >= 8) {
                getPlayerBtn.addEventListener("click", () => {
                    const result = this.calculateResult();
                    const resultP = document.createElement("p");
                    const message = document.createElement("p");
                    resultP.innerText = result.toString();
                    app_container?.appendChild(resultP);
                    if (result < 9000) {
                        message.innerText = "Damn, you lose :/";
                    } else {
                        message.innerText = "Victory!";
                    }
                    app_container?.appendChild(message);
                });
            }
        });

        if (pickedPlayersStrings.length > 0) {
            pickedPlayersStrings.forEach((x) => {
                const pickedPlayersP = document.createElement("p");
                pickedPlayersP.innerText = x;
                pickedPlayersDiv.appendChild(pickedPlayersP);
            });

            app_container?.appendChild(pickedPlayersDiv);
        }
    }

    getRandomPlayer(): number {
        const index = Math.floor(Math.random() * database.length);
        return index;
    }

    calculateResult(): number {
        let acc = 0;
        pickedPlayers.forEach((x) => {
            acc += x;
        });
        console.log(acc);
        return acc;
    }
}