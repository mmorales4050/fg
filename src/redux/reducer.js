let initialState = {
  page: "home",
  weapons: [],
  armors: [],
  monsters: [],
  character: {},
  fullCharacterHealth: 0,
  characterHealth: 0,
  currentMonster: {},
  currentMonsterHealth: 0,
  weaponInventory: [],
  armorInventory: [],
  equippedWeapon: {},
  equippedArmor: {},
  showMonsterDetails: false,
  showPlayerDetails: false,
  winGame: false,
  loseGame: false,
  loading: [],
  monsterTurn: false,
  characterTurn: false,
  attackPhase: false
}

const rootReducer = (oldState, action) => {
  return oldState
}

export default rootReducer
