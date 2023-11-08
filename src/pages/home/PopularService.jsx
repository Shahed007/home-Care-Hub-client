import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import useAxios from "../../hooks/useAxios";
import Card from "../../components/card/Card";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import Animation from "../../components/animation/Animation";

const PopularService = () => {
  const axios = useAxios();
  const { isLoading, error, data } = useQuery({
    queryKey: ["popularService"],
    queryFn: async () => axios.get("/services?popular=popular"),
  });

  if (isLoading)
    return (
      <div>
        <Animation></Animation>
      </div>
    );

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="mt-32">
      <Container>
        <div className="flex justify-center mb-14">
          <Title className="pb-2">Our popular services</Title>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {data?.data?.services.map((service) => (
            <Card key={service._id} popular={service}></Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <ButtonPrimary link="/services">Show All</ButtonPrimary>
        </div>
      </Container>
    </section>
  );
};

export default PopularService;
