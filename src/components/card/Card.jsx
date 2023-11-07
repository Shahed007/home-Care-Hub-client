import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
const Card = ({ popular }) => {
  const { _id, service_provider_name, image, services } = popular || [];
  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 backdrop-blur-md bg-text_color_dark/20 dark:text-text_color_dark">
      <img
        src={services.service_image}
        alt={`photo of ${service_provider_name}`}
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-4 space-y-8">
        <div className="space-y-2 border-b border-gray-200 pb-2 flex justify-between items-center">
          <figure className="flex gap-3 items-center">
            <img
              src={image}
              className="shadow-drop-center h-11 w-11 rounded-full border-4 border-secondary_color object-cover"
              alt=""
            />
            <figcaption className="font-semibold">
              {service_provider_name}
            </figcaption>
          </figure>
          <div className="flex gap-2 text-orange-500">
            <div className="flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="text-base font-medium">{services.rating}</p>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  popular: PropTypes.object.isRequired,
};

export default Card;
