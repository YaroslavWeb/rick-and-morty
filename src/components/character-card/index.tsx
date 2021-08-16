import { ICharacter } from 'interfaces/character';
import ReactTooltip from 'react-tooltip';
import './styles.scss';

interface CharacterCardProps {
    character: ICharacter;
}

const getDataTipText = (name: string, status: string, species: string): string => {
    return `
    Name: ${name} </br>
    Status: ${status} <br/>
    Species: ${species}
    `
}

export const CharacterCard = ({ character }: CharacterCardProps) => 
{
    
    const {name, status, species} = character
    return(
      <div data-tip={getDataTipText(name, status, species)} className="character-card">
        <ReactTooltip 
          place="bottom"
          effect="solid"
          border backgroundColor="white"
          borderColor="black"
          textColor="black"
          html 
        />
        <img src={character.image} alt="avatar" />
      </div>
    )
}
