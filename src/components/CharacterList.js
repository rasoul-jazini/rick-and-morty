import Character from "./Character";

const CharacterList = ({ charactersData }) => {
  return (
    <div className="grid grid-cols-12 gap-4 px-6 mt-8">
      {charactersData &&
        charactersData.map((character) => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  );
};

export default CharacterList;
