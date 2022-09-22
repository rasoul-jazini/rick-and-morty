import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

const Paginate = ({ totalPages, page }) => {
  const navigate = useNavigate();

  const pageHandler = (e, page) => {
    navigate({ search: `?page=${page}` });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center mt-6">
      <Pagination
        count={totalPages}
        page={page}
        onChange={pageHandler}
        variant="outlined"
        color="primary"
        shape="rounded"
        size="medium"
      />
    </div>
  );
};

export default Paginate;
