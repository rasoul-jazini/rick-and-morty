import { Link } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <Link
      to={`/${character.id}`}
      className="col-span-6 md:col-span-3 shadow-xl rounded-sm overflow-hidden"
    >
      <div className="aspect-square relative">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full"
        />
        <p className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 bg-opacity-50 text-gray-50 text-xs text-center font-medium whitespace-nowrap">
          {character.name}
        </p>
      </div>
    </Link>
  );
};

export default Character;
