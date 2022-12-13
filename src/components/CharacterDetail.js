import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CharacterDetail = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="container px-8 max-w-7xl">
      <header className="mt-6">
        <button
          className="text-gray-600 flex items-center gap-x-2 font-medium"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size="22" />
          <span className="font-bold text-lg">Back</span>
        </button>
      </header>
      <div className="px-4 py-8 mt-12 bg-gray-100 rounded-md shadow-md">
        <div className="grid grid-cols-12 gap-y-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
          <div className="col-span-12 sm:col-span-6 flex justify-center items-center">
            <div className="w-48 h-4w-48 rounded-full overflow-hidden">
              <img src={data.image} alt={data.name} className="w-full h-full" />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 pt-8 sm:pt-0 px-8">
            <h3 className="text-2xl text-gray-800 font-medium mb-5">
              {data.name}
            </h3>
            <div className="flex flex-col gap-y-2">
              <p className="border-b border-gray-200 pb-1 text-gray-800">
                <span className="font-medium">Status: </span>
                <span>{data.status}</span>
              </p>
              <p className="border-b border-gray-200 pb-1">
                <span className="font-medium">Species: </span>
                <span>{data.species}</span>
              </p>
              <p className="border-b border-gray-200 pb-1">
                <span className="font-medium">Gender: </span>
                <span>{data.gender}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
