import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Animation from "../../components/animation/Animation";
import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/Container";
import MayServiceCard from "../../components/card/MayServiceCard";
import Title from "../../components/title/Title";

const MyServices = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { isLoading, data } = useQuery({
    queryKey: ["myServices"],
    queryFn: () => axios.get(`/cart?provider_email=${user.email}`),
  });

  if (isLoading) return <Animation></Animation>;
  console.log(data.data);
  return (
    <section className="mt-[65px]">
      <PageHeader>My Schedule</PageHeader>
      <Container>
        <div className="mt-32">
          <Title>My Bookings</Title>
          <div className="overflow-x-auto">
            <table className="table mt-12">
              {/* head */}
              <thead className="text-lg font-bold text-text_color_normal dark:text-text_color_dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Action</th>
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
                      <button className="btn btn-sm">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyServices;
