import Container from "../../components/Container";
import Animation from "../../components/animation/Animation";
import PageHeader from "../../components/pageHeader/PageHeader";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const AddServices = () => {
  const axios = useAxios();
  const { user, loading } = useAuth();

  if (loading) return <Animation></Animation>;

  const image = user.photoURL;
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const service_provider_name = form.name.value;
    const email = form.email.value;
    const service_name = form.service.value;
    const price = form.price.value;
    const description = form.description.value;
    const service_image = form.image.value;
    const location = form.serviceArea.value;
    const services = {
      price,
      description,
      service_image,
    };

    const service = {
      service_provider_name,
      email,
      location,
      image,
      service_name,
      services,
    };
    axios.post("/services", service).then((res) => console.log(res.data));
  };
  return (
    <section className="mt-[65px]">
      <PageHeader>Add Services</PageHeader>
      <Container>
        <div className="my-32">
          <form
            onSubmit={handleAddProduct}
            className="space-y-5 shadow-drop-center p-4 rounded-s-md dark:text-text_color_dark"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">Picture URL</label>
              <input
                type="text"
                name="image"
                placeholder="Picture URL"
                className="input input-bordered input-primary w-full dark:bg-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Service Name</label>
              <input
                type="text"
                name="service"
                placeholder="Service Name"
                className="input input-bordered input-primary w-full dark:bg-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Your name</label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                placeholder="Your name"
                className="input input-bordered input-primary w-full dark:bg-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Your Email</label>
              <input
                name="email"
                type="text"
                defaultValue={user.email}
                placeholder="Your email"
                className="input input-bordered input-primary w-full dark:bg-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Price</label>
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered input-primary w-full dark:bg-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Service Area</label>
              <input
                name="serviceArea"
                type="text"
                placeholder="Service Area"
                className="input input-bordered input-primary w-full dark:bg-gray-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Description</label>
              <textarea
                name="description"
                className="w-full dark:bg-gray-600 p-3 border"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-secondary_color text-lg w-2/4 py-3 px-7 rounded active:scale-95 ">
                Add product
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default AddServices;
