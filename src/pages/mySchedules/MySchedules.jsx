import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Animation from "../../components/animation/Animation";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import MyPending from "./MyPending";
import { useState } from "react";
import Swal from "sweetalert2";

const MySchedules = () => {
  const axios = useAxios();
  const [status, setStatus] = useState(null);
  const { user } = useAuth();
  const { isLoading, data } = useQuery({
    queryKey: ["MySchedules", status],
    queryFn: () => axios.get(`/cart?user_email=${user.email}`),
  });

  const { isLoading: loading, data: data1 } = useQuery({
    queryKey: ["MyPending"],
    queryFn: () => axios.get(`/cart?provider_email=${user.email}`),
  });

  if (isLoading && loading)
    return (
      <div className="h-screen w-full">
        <Animation></Animation>
      </div>
    );

  const handleChangeStatus = (id) => {
    console.log(status);
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
      }
    });
  };
  return (
    <section className="mt-[65px]">
      <PageHeader>My Schedule</PageHeader>
      <Container>
        <div className="mt-32">
          <div className="mb-12">
            <Title>My Bookings</Title>
          </div>
          {data?.data?.length === 0 ? (
            <div className="flex justify-center items-center text-center">
              <h1 className="text-2xl font-bold dark:text-white">
                You have no Bookings
              </h1>
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
                      <td>{item?.status ? item?.status : "Pending"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <MyPending
          handleChangeStatus={handleChangeStatus}
          data1={data1}
          loading={loading}
          setStatus={setStatus}
        ></MyPending>
      </Container>
    </section>
  );
};

export default MySchedules;
