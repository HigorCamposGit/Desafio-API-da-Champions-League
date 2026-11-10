import { PlayerModel } from "../models/playerModel"
import { StatisticsModel } from "../models/statisticsModel";

const db: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Inter Miami",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 89,
      Shooting: 93,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 3,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 80,
      Shooting: 92,
      Passing: 78,
      Dribbling: 83,
      Defending: 40,
      Physical: 84,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 85,
      Passing: 92,
      Dribbling: 87,
      Defending: 62,
      Physical: 79,
    },
  },
  {
    id: 5,
    name: "Kylian Mbappé",
    club: "Real Madrid",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 96,
      Shooting: 86,
      Passing: 79,
      Dribbling: 91,
      Defending: 39,
      Physical: 76,
    },
  },
  {
    id: 6,
    name: "Neymar Jr",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 92,
      Shooting: 87,
      Passing: 85,
      Dribbling: 95,
      Defending: 33,
      Physical: 78,
    },
  },
  {
    id: 7,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 90,
      Pace: 77,
      Shooting: 60,
      Passing: 72,
      Dribbling: 70,
      Defending: 91,
      Physical: 86,
    },
  },
  {
    id: 8,
    name: "Sergio Ramos",
    club: "Paris Saint-Germain",
    nationality: "Spain",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 77,
      Shooting: 68,
      Passing: 78,
      Dribbling: 76,
      Defending: 88,
      Physical: 89,
    },
  },
  {
    id: 9,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 94,
      Shooting: 85,
      Passing: 80,
      Dribbling: 89,
      Defending: 45,
      Physical: 74,
    },
  },
  {
    id: 10,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 77,
      Shooting: 78,
      Passing: 92,
      Dribbling: 84,
      Defending: 83,
      Physical: 83,
    },
  },
  {
    id: 11,
    name: "Harry Kane",
    club: "Tottenham Hotspur",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 89,
      Pace: 70,
      Shooting: 91,
      Passing: 82,
      Dribbling: 80,
      Defending: 45,
      Physical: 87,
    },
  },
  {
    id: 12,
    name: "Jan Oblak",
    club: "Atletico Madrid",
    nationality: "Slovenia",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 60,
      Shooting: 40,
      Passing: 55,
      Dribbling: 50,
      Defending: 84,
      Physical: 88,
    },
  },
  {
    id: 13,
    name: "Erling Haaland",
    club: "Borussia Dortmund",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 88,
      Shooting: 89,
      Passing: 74,
      Dribbling: 82,
      Defending: 42,
      Physical: 85,
    },
  },
  {
    id: 14,
    name: "Luis Suárez",
    club: "Atletico Madrid",
    nationality: "Uruguay",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 72,
      Shooting: 89,
      Passing: 81,
      Dribbling: 83,
      Defending: 45,
      Physical: 85,
    },
  },
  {
    id: 15,
    name: "Sadio Mané",
    club: "Liverpool",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 94,
      Shooting: 83,
      Passing: 78,
      Dribbling: 86,
      Defending: 44,
      Physical: 78,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return db
}

export const findPlayersById = async (id: number): Promise<PlayerModel | undefined> => {
  return db.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  db.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = db.findIndex(player => player.id === id)
  if (index !== -1) {
    db.splice(index, 1)
    return true
  }

  return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const playerIndex = db.findIndex(player => player.id === id)
  if (playerIndex !== -1) {
    db[playerIndex].statistics = statistics
  }

  return db[playerIndex]
}