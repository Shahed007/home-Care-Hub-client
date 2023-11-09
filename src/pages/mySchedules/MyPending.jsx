import { useRef } from "react";
import Container from "../../components/Container";
import Title from "../../components/title/Title";
import PropTypes from "prop-types";
import Animation from "../../components/animation/Animation";

const MyPending = ({ handleChangeStatus, data1, loading, setStatus }) => {
  const statusRef = useRef(null);
  if (loading) return <Animation></Animation>;

  const handleSelect = (id) => {
    setStatus(statusRef.current.value);
    console.log(statusRef.current.value);

    handleChangeStatus(id);
  };
  return (
    <section className="my-32">
      <Container>
        <div className="mb-12">
          <Title>My Pending works</Title>
        </div>
        {data1.data.length === 0 ? (
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
                {data1?.data?.map((item) => (
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
  handleChangeStatus: PropTypes.func.isRequired,
  loading: PropTypes.any,
  setStatus: PropTypes.func,
};

export default MyPending;
