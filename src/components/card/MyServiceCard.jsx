import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
const MyServiceCard = ({ popular, toggleModal }) => {
  const { _id, service_provider_name, image, service_name, services } =
    popular || [];
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
          <h3 className="text-2xl mb-4 font-semibold">{service_name}</h3>
          <p className="text-base">{services?.description.slice(0, 100)}...</p>
        </div>

        <h1 className="text-4xl font-medium text-center mb-7 text-secondary ">
          {services.price}
        </h1>
        <div className="flex flex-col gap-3">
          <button
            onClick={toggleModal}
            className="px-[32px] py-[10px] rounded bg-secondary_color/60 dark:text-text_color_dark text-text_color_normal font-semibold text-lg border-transparent border-[2px] duration-200 hover:border-secondary_color dark:hover:text-secondary_color w-full hover:text-secondary_color hover:bg-transparent active:scale-95 shadow-drop-center"
          >
            Update
          </button>
          <button className="btn btn-block btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

MyServiceCard.propTypes = {
  popular: PropTypes.object.isRequired,
  toggleModal: PropTypes.func,
};

export default MyServiceCard;
