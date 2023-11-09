import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import Container from "../Container";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const MyServiceCard = ({ popular, refetch }) => {
  const axios = useAxios();
  const {
    _id,
    service_provider_name,
    location,
    image,
    service_name,
    services,
  } = popular || [];

  function toggleModal() {
    document.getElementById("modal").classList.toggle("hidden");
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const service_name = form.service_name.value;
    const location = form.address.value;
    const price = form.price.value;
    const description = form.description.value;
    const service_image = form.service_image.value;

    const services = {
      _id,
      service_name,
      location,
      services: {
        price,
        description,
        service_image,
      },
    };

    axios.put("/services", services).then((res) => {
      if (res?.data.modifiedCount) {
        toggleModal();
        Swal.fire({
          title: "Success",
          text: "Service updated successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };

  const handleDelete = () => {
    axios.delete(`/services/${_id}`).then((res) => {
      if (res.data.deletedCount) {
        Swal.fire({
          title: "Success",
          text: "Delete successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
      refetch();
    });
  };
  return (
    <>
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
            <p className="text-base">
              {services?.description.slice(0, 100)}...
            </p>
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
            <button onClick={handleDelete} className="btn btn-block btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>

      <>
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
          id="modal"
        >
          <div className="flex items-center justify-center min-h-screen   pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <Container>
              <div className="fixed inset-0 transition-opacity sm:mt-16 mt-32 sm:mx-0 mx-2">
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block h-3/4 align-center bg-white rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <form className="space-y-3" onSubmit={handleUpdate}>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="">Service Name</label>
                        <input
                          type="text"
                          name="service_name"
                          placeholder="Type here"
                          defaultValue={service_name}
                          className="input input-bordered w-full "
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="">Service Image</label>
                        <input
                          type="text"
                          name="service_image"
                          placeholder="Type here"
                          defaultValue={services.service_image}
                          className="input input-bordered w-full "
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="">Service area</label>
                        <input
                          type="address"
                          name="address"
                          defaultValue={location}
                          placeholder="Type here"
                          className="input input-bordered w-full "
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="">Price</label>
                        <input
                          type="price"
                          name="price"
                          defaultValue={services.price}
                          placeholder="Type here"
                          className="input input-bordered w-full "
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="">description</label>
                        <textarea
                          name="description"
                          defaultValue={services.description}
                          className="w-full h-36 border-2 border-gray-600 p-3"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block bg-secondary_color"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                  <div className="bg-gray-200 px-4 py-3 text-right">
                    <button
                      onClick={toggleModal}
                      type="button"
                      className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                    >
                      <i className="fas fa-times" /> Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </>
    </>
  );
};

MyServiceCard.propTypes = {
  popular: PropTypes.object.isRequired,
  refetch: PropTypes.func,
};

export default MyServiceCard;
