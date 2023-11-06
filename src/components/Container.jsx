import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="max-w-[1200px] mx-auto h-full px-3">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
