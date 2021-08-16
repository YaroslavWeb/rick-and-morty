import { ICharacter } from 'interfaces/character';
import './styles.scss';

interface CharacterCardProps {
    character: ICharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <div data-tip="name" className="character-card">
    <img src={character.image} alt="avatar" />
  </div>
);
