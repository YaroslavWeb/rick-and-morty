import { useState, useEffect, ChangeEvent } from 'react';

import { getCharacters, getFilteredCharacters } from 'services/characters';
import { ICharacter } from 'interfaces/character';
import { InputText } from 'components/input-text';
import { CharacterCard } from 'components/character-card';

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isRequest, setRequest] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const data = await getCharacters;
      setCharacters(data);
    };
    getData();
  }, []);

  const onChangeSeach = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value.length >= 2 && !isRequest) {
      const filtredCharacters = await getFilteredCharacters(value);
      setCharacters(filtredCharacters);
      setRequest(true);
      setTimeout(() => { setRequest(false); }, 500);
    }
  };

  return (
    <>
      <header>
        <InputText value={searchValue} onChange={onChangeSeach} type="text" placeholder="Search..." />
      </header>
      <main>
        {characters.length
          ? characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
          : <span>Загрузка...</span>}
      </main>
    </>
  );
}

export default App;
