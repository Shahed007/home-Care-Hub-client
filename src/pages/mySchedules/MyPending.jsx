import { useEffect, useRef, useState } from "react";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import PropTypes from "prop-types";
import Animation from "../../components/animation/Animation";

import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MyPending = ({ refetch }) => {
  const axios = useAxios();
  const { user } = useAuth();
  const statusRef = useRef(null);
  const { isLoading, data } = useQuery({
    queryKey: ["panding"],
    queryFn: () => axios.get(`/provider/${user?.email}`),
  });

  if (isLoading) return <Animation></Animation>;
  

  const handleSelect = (id) => {
    const status = statusRef.current.value;
    const cart = {
      id,
      status,
    };

    axios.put("/cart", cart).then((res) => {
      if (res.data.matchedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Status updated successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
        refetch();
      }
    });
  };
  return (
    <section className="my-32">
      <Container>
        <div className="mb-12">
          <Title>My Pending works</Title>
        </div>
        {data?.data?.length === 0 ? (
          <div className="flex justify-center items-center text-center">
            <h1 className="text-2xl font-bold">You have no padding service</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="text-lg font-bold text-text_color_normal dark:text-text_color_dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((item) => (
                  <tr
                    key={item._id}
                    className="text-text_color_normal dark:text-text_color_dark"
                  >
                    <td>
                      <img
                        className="h-14 w-14 object-cover"
                        src={item.service_image}
                        alt=""
                      />
                    </td>
                    <td>{item.service_name}</td>
                    <td>{item.price}</td>
                    <td>{item.date}</td>
                    <td>
                      <select
                        className="dark:bg-gray-600 dark:text-text_color_dark"
                        ref={statusRef}
                        onChange={() => handleSelect(item._id)}
                        name=""
                        id=""
                      >
                        <option value="pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </section>
  );
};

MyPending.propTypes = {
  refetch: PropTypes.func,
};

export default MyPending;
