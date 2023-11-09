import PropTypes from "prop-types";

const MayServiceCard = ({ mySerivce }) => {
  // console.log(Object.keys(mySerivce));
  return <div>MayServiceCard</div>;
};

MayServiceCard.propTypes = {
  mySerivce: PropTypes.object.isRequired,
};

export default MayServiceCard;
