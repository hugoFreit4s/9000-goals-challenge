const database = [{ playerId: crypto.randomUUID(), playerName: "Cristiano Ronaldo", goalsScored: 763 }, { playerId: crypto.randomUUID(), playerName: "Lionel Messi", goalsScored: 735 }, { playerId: crypto.randomUUID(), playerName: "Neymar Jr.", goalsScored: 360 }, { playerId: crypto.randomUUID(), playerName: "Sandro Tonali", goalsScored: 26 }];
let pickedPlayers = [];
let pickedPlayersStrings = [];
let pickedPlayersSections = [];
let carrerIndex = 0;
let doubleIndex = 0;
let tripleIndex = 0;
let quadrupleIndex = 0;
const app_container = document.getElementById("app_container");
export default class Players {
    constructor() {
        this.render();
    }
    render() {
        app_container.innerHTML = "";
        const sortedPlayerDiv = document.createElement("div");
        sortedPlayerDiv.style.height = "20px";
        const pickedPlayersDiv = document.createElement("div");
        const getPlayerBtn = document.createElement("button");
        app_container?.appendChild(sortedPlayerDiv);
        app_container?.appendChild(getPlayerBtn);
        app_container?.appendChild(pickedPlayersDiv);
        getPlayerBtn.innerText = "Get player!";
        const carrerBtn = document.createElement("button");
        carrerBtn.disabled = carrerIndex > 2 ? true : false;
        const doubleBtn = document.createElement("button");
        doubleBtn.disabled = doubleIndex > 1 ? true : false;
        const tripleBtn = document.createElement("button");
        tripleBtn.disabled = tripleIndex > 1 ? true : false;
        const quadrupleBtn = document.createElement("button");
        quadrupleBtn.disabled = quadrupleIndex > 1 ? true : false;
        getPlayerBtn?.addEventListener("click", () => {
            if (pickedPlayers.length <= 8) {
                let index = this.getRandomPlayer();
                let sortedPlayer = database[index];
                const buttonsDiv = document.createElement("div");
                let goalsScoredAfterChoose = 0;
                sortedPlayerDiv.innerText = `${sortedPlayer.playerName}`;
                app_container?.removeChild(getPlayerBtn);
                carrerBtn.innerText = "Carrer";
                carrerBtn.addEventListener("click", () => {
                    carrerIndex++;
                    pickedPlayersSections.push({ carrer: carrerIndex, player: database[index] });
                    console.log(pickedPlayersSections);
                    goalsScoredAfterChoose = database[index].goalsScored;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });
                doubleBtn.innerText = "Double";
                doubleBtn.addEventListener("click", () => {
                    doubleIndex++;
                    pickedPlayersSections.push({ double: doubleIndex, player: database[index] });
                    console.log(pickedPlayersSections);
                    goalsScoredAfterChoose = database[index].goalsScored * 2;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });
                tripleBtn.innerText = "Triple";
                tripleBtn.addEventListener("click", () => {
                    goalsScoredAfterChoose = database[index].goalsScored * 3;
                    const sortedPlayerString = `${sortedPlayer.playerName} - ${goalsScoredAfterChoose} GOALS`;
                    pickedPlayers.push(goalsScoredAfterChoose);
                    pickedPlayersStrings.push(sortedPlayerString);
                    this.render();
                });
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
            }
            else if (pickedPlayers.length >= 8) {
                app_container?.removeChild(getPlayerBtn);
                const result = this.calculateResult();
                const resultP = document.createElement("p");
                const message = document.createElement("p");
                resultP.innerText = result.toString();
                app_container?.appendChild(resultP);
                if (result < 9000) {
                    message.innerText = "Damn, you lose :/";
                }
                else {
                    message.innerText = "Victory!";
                }
                app_container?.appendChild(message);
                setTimeout(() => {
                    pickedPlayers = [];
                    pickedPlayersStrings = [];
                    this.render();
                }, 500);
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
    getRandomPlayer() {
        const index = Math.floor(Math.random() * database.length);
        return index;
    }
    calculateResult() {
        let acc = 0;
        pickedPlayers.forEach((x) => {
            acc += x;
        });
        console.log(acc);
        return acc;
    }
}
