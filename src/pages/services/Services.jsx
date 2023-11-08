import PageHeader from "../../components/pageHeader/PageHeader";
import Container from "../../components/Container";
import { useState } from "react";
import ServicesItem from "../servicedDetails/ServicesItem";

const Services = () => {
  const [search, setSearch] = useState(" ");
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
  };
  return (
    <section className="mt-[65px] mb-32">
      <PageHeader>Services</PageHeader>
      <div className="mt-32">
        <Container>
          <div className="bg-secondary_color/70 backdrop-blur-md p-4 rounded-md flex md:flex-row flex-col md:items-center w-full gap-6">
            <fieldset className="md:w-2/3 space-y-1 dark:text-gray-100 ">
              <form className="relative w-full " onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  className="block w-full py-2 pl-10  text-sm rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 left-0 flex items-center pl-2"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-100"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </form>
            </fieldset>
            <div className="flex-1 flex items-center gap-6">
              <fieldset className="w-full">
                <div className="relative border rounded-md border-gray-300 w-full text-gray-800 bg-white shadow-lg">
                  <label htmlFor="frm-whatever" className="sr-only">
                    My field
                  </label>
                  <select
                    className="appearance-none w-full py-1 px-2 bg-white rounded-l-md"
                    name="whatever"
                    id="frm-whatever"
                  >
                    <option value="">Category</option>
                    <option value={1}>Item 1</option>
                    <option value={2}>Item 2</option>
                    <option value={3}>Item 3</option>
                  </select>
                  <div className="pointer-events-none rounded-r-md absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                    <svg
                      className="h-4 w-4 rounded-r-md"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </fieldset>
              <fieldset className="w-full">
                <div className="relative border rounded-md border-gray-300 w-full text-gray-800 bg-white shadow-lg">
                  <label htmlFor="frm-whatever" className="sr-only">
                    My field
                  </label>
                  <select
                    className="appearance-none w-full py-1 px-2 bg-white rounded-l-md"
                    name="whatever"
                    id="frm-whatever"
                  >
                    <option value="">Price</option>
                    <option value={1}>Item 1</option>
                    <option value={2}>Item 2</option>
                    <option value={3}>Item 3</option>
                  </select>
                  <div className="pointer-events-none rounded-r-md absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                    <svg
                      className="h-4 w-4 rounded-r-md"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>

          <ServicesItem search={search}></ServicesItem>
        </Container>
      </div>
    </section>
  );
};

export default Services;
