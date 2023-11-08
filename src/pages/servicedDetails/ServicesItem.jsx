import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Card from "../../components/card/Card";
import { useState } from "react";
import PropTypes from "prop-types";
import Animation from "../../components/animation/Animation";

const ServicesItem = ({ search }) => {
  const axios = useAxios();
  const [active, setActive] = useState(0);
  const itemParPage = 10;
  const { isLoading, error, data } = useQuery({
    queryKey: ["services", active, search],
    queryFn: () =>
      axios.get(
        `/services?page=${active}&size=${itemParPage}&search=${search}`
      ),
  });

  if (isLoading) return <Animation></Animation>;
  const numberOfPages = Math.ceil(data?.data?.count / itemParPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  const handelNext = () => {
    if (active < pages.length - 1) {
      setActive(active + 1);
    }
  };
  return (
    <div>
      <div className="mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid">
        {data?.data?.services.map((service) => (
          <Card key={service._id} popular={service}></Card>
        ))}
      </div>

      <div className="mt-12 flex items-center justify-center">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex active:scale-95  items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-700"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {pages?.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item)}
              className={`px-4 py-2 ring-1 ring-gray-300 text-sm font-semibold hover:bg-secondary_color duration-150 
               ${item === active ? "bg-secondary_color" : ""}
              `}
            >
              {item + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={handelNext}
            className="inline-flex active:scale-95  items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-700"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

ServicesItem.propTypes = {
  search: PropTypes.string.isRequired,
};

export default ServicesItem;
