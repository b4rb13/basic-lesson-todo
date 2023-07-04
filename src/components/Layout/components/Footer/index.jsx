import useTodoContext from "../../../../contexts/useTodoContext";
import Skeleton from "react-loading-skeleton";
import "./style.css";
const Footer = () => {
  console.log("footer");
  const { statistics, loading } = useTodoContext();
  return (
    <div className="footer-container">
      <span>Footer</span>
      <div className="statistics">
        {loading ? (
          <Skeleton containerClassName="skeleton" />
        ) : (
          <span className="total">Total: {statistics.totalCount}</span>
        )}
        {loading ? (
          <Skeleton containerClassName="skeleton" />
        ) : (
          <span className="done">Done: {statistics.done}</span>
        )}
        {loading ? (
          <Skeleton containerClassName="skeleton" />
        ) : (
          <span className="pending">Pending: {statistics.pending}</span>
        )}
      </div>
    </div>
  );
};

export default Footer;
