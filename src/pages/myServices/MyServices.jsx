import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import PageHeader from "../../components/pageHeader/PageHeader";

import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Animation from "../../components/animation/Animation";
import MyServiceCard from "../../components/card/MyServiceCard";

const MyServices = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { isLoading, data, refetch } = useQuery({
    queryKey: ["MyServices"],
    queryFn: () => axios.get(`/services?email=${user.email}`),
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Animation></Animation>
      </div>
    );
  }

  return (
    <section className="mt-[65px]">
      <PageHeader>My Services</PageHeader>
      {data?.data?.services.length === 0 ? (
        <div className="flex justify-center items-center h-screen w-full">
          <h1 className="text-2xl font-bold text-center dark:text-text_color_dark">
            You not added any services
          </h1>
        </div>
      ) : (
        <Container>
          <div className="my-32 grid grid-cols-1  lg:grid-cols-3 gap-6">
            {data?.data?.services.map((popular) => (
              <MyServiceCard
                key={popular._id}
                popular={popular}
                refetch={refetch}
              ></MyServiceCard>
            ))}
          </div>
        </Container>
      )}
    </section>
  );
};

export default MyServices;
