// Ship module

// CLASS/factory for ships:
export class Ship {
    constructor(type, length) {
      this.type = type;
      this.length = length;
      this.hits = 0;
    }
  
    // hit() increases number of hits on ship:
    hit() {
      this.hits += 1;
    }
  
    // isSunk() calculates if ship is sunk based on length and number of hits received:
    isSunk() {
      return this.hits === this.length;
    }
}

// Define fleet
export const fleet = [
  { type: 'Carrier', length: 5 },
  { type: 'Battleship', length: 4 },
  { type: 'Cruiser', length: 3 },
  { type: 'Submarine', length: 3 },
  { type: 'Destroyer', length: 2 }
];

// Generate fleet based on types
export const genFleet = () => {
  return fleet.map(({ type, length }) => new Ship(type, length));
};

