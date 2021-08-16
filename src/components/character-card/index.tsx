import { ICharacter } from 'interfaces/character';
import './styles.scss';

interface CharacterCardProps {
    character: ICharacter;
}

export const CharacterCard = ({ character }: CharacterCardProps) => (
  <div className="character-card" data-tip="name:{character.name}" data-id="info">
    <img src={character.image} alt="avatar" />
  </div>
);
