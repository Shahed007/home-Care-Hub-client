import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Animation from "../../components/animation/Animation";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Animation></Animation>;

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
