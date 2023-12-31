import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Container from "../../components/Container";
import PageHeader from "../../components/pageHeader/PageHeader";
import { AiFillStar } from "react-icons/ai";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Animation from "../../components/animation/Animation";

const ServicesDetails = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const data = useLoaderData();

  const {
    service_provider_name,
    email,
    service_name,
    mobile,
    location,
    image,
    services,
  } = data.data || {};
  const { price, rating, description, features, service_image } =
    services || {};

  const {
    isLoading,

    data: realtedService,
  } = useQuery({
    queryKey: ["serviceDetails"],
    queryFn: async () => axios.get(`services?email=${email}`),
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center text-center">
        <Animation></Animation>
      </div>
    );
  }

  function toggleModal() {
    document.getElementById("modal").classList.toggle("hidden");
  }

  const handleParches = (e) => {
    e.preventDefault();
    const form = e.target;
    const service_name = form.service_name.value;
    const service_image = form.service_image.value;
    const provider_email = form.provider_email.value;
    const user_email = form.user_email.value;
    const date = form.date.value;
    const address = form.address.value;
    const price = form.price.value;
    const instruction = form.instruction.value;
    const cart = {
      service_name,
      service_image,
      provider_email,
      user_email,
      date,
      address,
      price,
      instruction,
    };

    axios
      .post("cart", cart)
      .then((res) => {
        if (res.data.insertedId) {
          toggleModal();
          Swal.fire({
            title: "Success",
            text: "Purchase successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className="mt-[65px] bg-gradient-to-l to-secondary_color/30 from-transparent">
      <PageHeader>Service Details</PageHeader>
      <Container>
        <div className="py-28">
          <div className=" flex  items-center gap-8 lg:flex-row flex-col-reverse">
            <div className=" dark:text-text_color_dark flex-1">
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <h2 className="sm:text-3xl text-2xl font-bold">
                    {service_name}
                  </h2>
                  <p className="flex gap-1 items-center font-medium text-lg">
                    <AiFillStar className="text-yellow-400" />
                    {rating}
                  </p>
                </div>
                <p className="text-base">{description}</p>
                <ul className="space-y-2 text-lg">
                  {features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-secondary_color"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>

                      {feature}
                    </li>
                  ))}
                </ul>
                <h1 className=" font-bold  text-center">
                  <span className="text-3xl">Price / </span>
                  <span className="text-secondary text-4xl align-sub">
                    {price}
                  </span>
                </h1>
                <button
                  onClick={toggleModal}
                  className="bg-secondary_color active:scale-95 py-3 block rounded w-full text-lg font-medium duration-150  border-2 border-transparent hover:border-secondary_color hover:text-secondary_color hover:bg-transparent"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="flex-1">
              <img
                className="h-full w-full rounded shadow-drop-center"
                src={service_image}
                alt={`image of ${service_name}`}
              />
            </div>
          </div>
          <div className="mt-12 dark:text-text_color_dark">
            <h3 className="text-2xl font-bold">Service provider</h3>
            <div className="mt-8 flex items-center gap-5 sm:flex-row flex-col">
              <img
                src={image}
                className="h-48 w-48 object-cover rounded-lg"
                alt={`image of ${service_name}`}
              />
              <div className="space-y-2">
                <h5 className="text-lg">
                  <span className="font-semibold">Name:</span>{" "}
                  {service_provider_name}
                </h5>
                <h5 className="text-lg">
                  <span className="font-semibold">Location:</span> {location}
                </h5>
                <h5 className="text-lg">
                  <span className="font-semibold">Phone:</span> {mobile}
                </h5>
                <h5 className="text-lg">
                  <span className="font-semibold">Email:</span> {email}
                </h5>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <Title>Related Services</Title>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {realtedService?.data?.services?.slice(0, 3).map((popular) => (
                <Card key={popular._id} popular={popular}></Card>
              ))}
            </div>
          </div>
        </div>
      </Container>

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
                  <form onSubmit={handleParches} className="space-y-3">
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">Service Name</label>
                      <input
                        type="text"
                        name="service_name"
                        placeholder="Type here"
                        defaultValue={service_name}
                        readOnly
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">Service Image</label>
                      <input
                        type="text"
                        name="service_image"
                        placeholder="Type here"
                        defaultValue={service_image}
                        readOnly
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">Service Provider email</label>
                      <input
                        type="text"
                        name="provider_email"
                        placeholder="Type here"
                        defaultValue={email}
                        readOnly
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">User email</label>
                      <input
                        type="text"
                        name="user_email"
                        placeholder="Type here"
                        defaultValue={user.email}
                        readOnly
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">Service Taking Date</label>
                      <input
                        type="date"
                        name="date"
                        placeholder="Type here"
                        required
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">address</label>
                      <input
                        type="address"
                        name="address"
                        required
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">Price</label>
                      <input
                        type="price"
                        name="price"
                        defaultValue={price}
                        readOnly
                        required
                        placeholder="Type here"
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label htmlFor="">Special instruction</label>
                      <textarea
                        name="instruction"
                        placeholder="instruction"
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
                      Purchase this Service
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
    </section>
  );
};

export default ServicesDetails;
