import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Animation from "../../components/animation/Animation";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import MyPending from "./MyPending";
import { useEffect, useState } from "react";

const MySchedules = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [getUser, setUser] = useState(false);

  const url = `/cart?user_email=${user.email}`;
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["cart"],
    enabled: getUser,
    queryFn: async () => {
      try {
        const res = await axios.get(url);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  useEffect(() => {
    // refetch();
    if (user.email) {
      setUser(true);
    }
  }, [user]);

  if (isLoading)
    return (
      <div className="h-screen w-full">
        <Animation></Animation>
      </div>
    );

  return (
    <section className="mt-[65px]">
      <PageHeader>My Schedule</PageHeader>
      <Container>
        <div className="mt-32">
          <div className="mb-12">
            <Title>My Bookings</Title>
          </div>
          {data?.length === 0 ? (
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
                  {data?.map((item) => (
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
        <MyPending refetch={refetch}></MyPending>
      </Container>
    </section>
  );
};

export default MySchedules;
