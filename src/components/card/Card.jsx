import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import ButtonPrimary from "../button/ButtonPrimary";
const Card = ({ popular }) => {
  const { _id, service_provider_name, image, services } = popular || [];
  return (
    <div className="rounded-md shadow-md dark:bg-gray-900 backdrop-blur-md bg-text_color_dark/20 dark:text-text_color_dark">
      <img
        src={services.service_image}
        alt={`photo of ${service_provider_name}`}
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-4 ">
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
        <div className="mt-3 mb-6">
          <h3 className="text-2xl mb-4 font-semibold">
            {services.service_name}
          </h3>
          <p className="text-base">{services?.description.slice(0, 100)}...</p>
        </div>

        <h1 className="text-4xl font-medium text-center mb-7 text-secondary ">
          {services.price}
        </h1>
        <ButtonPrimary
          link={`/serviceDetails/${_id}`}
          className="flex justify-center items-center hover:bg-transparent"
        >
          Details
        </ButtonPrimary>
      </div>
    </div>
  );
};

Card.propTypes = {
  popular: PropTypes.object.isRequired,
};

export default Card;
