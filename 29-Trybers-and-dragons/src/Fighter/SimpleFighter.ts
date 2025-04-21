export default interface SimpleFithter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFithter): void
  receiveDamage(attackPoints: number): number
}