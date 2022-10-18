import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex mt-40 justify-center">
      <ThreeDots
        height="40"
        width="40"
        radius="9"
        color="#999"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
