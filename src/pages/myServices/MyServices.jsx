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
  const { isLoading, data } = useQuery({
    queryKey: ["MyServices"],
    queryFn: () => axios.get(`/services?email=${user.email}`),
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full">
        <Animation></Animation>
      </div>
    );
  }

  function toggleModal() {
    document.getElementById("modal").classList.toggle("hidden");
  }

  return (
    <section className="mt-[65px]">
      <PageHeader>My Services</PageHeader>
      <Container>
        <div className="my-32 grid grid-cols-1  lg:grid-cols-3 gap-6">
          {data?.data?.services.map((popular) => (
            <MyServiceCard
              key={popular._id}
              popular={popular}
              toggleModal={toggleModal}
            ></MyServiceCard>
          ))}
        </div>
      </Container>

      <Container>
        <>
          <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
            id="modal"
          >
            <div className="flex items-center justify-center min-h-screen   pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
              <div className="fixed inset-0 transition-opacity sm:mt-0 mt-32">
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block align-center bg-white rounded-lg text-left overflow-y-scroll shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <label className="font-medium text-gray-800">Name</label>
                    <input
                      type="text"
                      className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                    />
                    <label className="font-medium text-gray-800">Url</label>
                    <input
                      type="text"
                      className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
                    />
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
            </div>
          </div>
        </>
      </Container>
    </section>
  );
};

export default MyServices;
