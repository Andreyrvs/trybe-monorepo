import Energy from '../Energy';
import SimpleFithter from './SimpleFighter';

export default interface Fighter extends SimpleFithter {
  defense: number
  energy?: Energy
  special(enemy?: Fighter): void
  levelUp(): void
}