import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Container from "../../components/Container";
import PageHeader from "../../components/pageHeader/PageHeader";
import { AiFillStar } from "react-icons/ai";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";

const ServicesDetails = () => {
  const axios = useAxios();
  const data = useLoaderData();

  const { service_provider_name, email, mobile, location, image, services } =
    data.data || {};
  const {
    category,
    service_name,
    price,
    rating,
    description,
    features,
    service_image,
  } = services || {};

  const {
    isLoading,
    error,
    data: realtedService,
  } = useQuery({
    queryKey: ["serviceDetails"],
    queryFn: async () => axios.get(`services?email=${email}`),
  });

  if (isLoading) return "loading";

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
                <button className="bg-secondary_color active:scale-95 py-3 block rounded w-full text-lg font-medium duration-150  border-2 border-transparent hover:border-secondary_color hover:text-secondary_color hover:bg-transparent">
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
          <div className="mt-12">
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
              {realtedService?.data?.slice(0, 3).map((popular) => (
                <Card key={popular._id} popular={popular}></Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesDetails;