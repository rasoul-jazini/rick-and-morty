const Error = ({ error }) => {
  return (
    <div className="h-screen flex mt-40 justify-center">
      <p className="text-2xl text-gray-700 text-center font-medium">{error}</p>
    </div>
  );
};

export default Error;
