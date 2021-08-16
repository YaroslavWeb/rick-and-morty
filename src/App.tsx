import { useState, useEffect, ChangeEvent } from 'react';

import { getCharacters, getFilteredCharacters } from 'services/characters';
import { ICharacter } from 'interfaces/character';
import { InputText } from 'components/input-text';
import { CharacterCard } from 'components/character-card';

function App() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [isRequest, setRequest] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const data = await getCharacters;
      setCharacters(data);
      setRequest(false);
    };
    getData();
  }, []);

  const afterRequest = (data: ICharacter[]): void => {
    setCharacters(data);
    setRequest(true);
    setTimeout(()=>setRequest(false), 500);
  }

  const onChangeSeach = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value.length >= 2 && !isRequest) {
      const data = await getFilteredCharacters(value);
      afterRequest(data)
    }
    
    if(!value.length && !isRequest){
      const data = await getCharacters;
      afterRequest(data)
    }
  };

  return (
    <>
      <header>
        <InputText value={searchValue} onChange={onChangeSeach} type="text" placeholder="Search..." />
      </header>
      <div className="loader">
        {(!characters.length && !isRequest) && <div>Нет результатов...</div>}
        {isRequest && <div>Загрузка</div>}
      </div>
      <main>
        {!!characters.length && (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </main>
    </>
  );
}

export default App;
