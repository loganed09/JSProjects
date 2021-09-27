const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  {
    firstName: 'Jean',
    lastName: 'Luke',
    age: 14
  },
  {
    firstName: 'Jack',
    lastName: 'Cross',
    age: 12
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 26
  },
  {
    opponent: 'Pirates',
    teamPoints: 22,
    opponentPoints: 86
  },
  {
    opponent: 'Rays',
    teamPoints: 44,
    opponentPoints: 35
  }],

  get players() {
    for (let player in this._players) {
      console.log(`${this._players[player].firstName} ${this._players[player].lastName}, ${this._players[player].age} years old.`);
    }
  },

  get games() {
    for (let game in this._games){
      console.log(`We played the ${this._games[game].opponent}. The score was: ${this._games[game].opponent}: ${this._games[game].opponentPoints}.  Us: ${this._games[game].teamPoints}.`);
    }
  },

  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    }
    return this._players.push(player);
  },

  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    }
    return this._games.push(game);
  }

}


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Warriors', 22, 73);
team.addGame('Frosts', 55, 10);
team.addGame('Giants', 22, 34);
team.players;
team.games;

