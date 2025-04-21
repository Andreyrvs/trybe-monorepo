import Monster from './Monster';

class Dragon extends Monster {
  constructor() {
    super();

    super._lifePoints = 999;
  }
}

export default Dragon;