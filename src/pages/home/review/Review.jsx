import Container from "../../../components/Container";
import Title from "../../../components/title/Title";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <section className="my-32">
      <div className="flex justify-center mb-14">
        <Title>Testimonial</Title>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="container shadow-drop-center flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Review by Jane D</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <AiFillStar />
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4  text-sm text-justify dark:text-text_color_dark">
              <p>
                I recently used HomeCareHub to find a plumber, and the
                experience was fantastic! The platform was user-friendly, and I
                quickly found a reliable plumber to fix my leaking faucet. The
                service was top-notch, and the plumber arrived on time.
                I&apos;ll definitely use HomeCareHub for my future home service
                needs.
              </p>
            </div>
          </div>
          <div className="container shadow-drop-center flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/men/31.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Review by John S.</h4>
                  <span className="text-xs dark:text-gray-400">4 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <AiFillStar />
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 text-justify text-sm dark:text-text_color_dark">
              <p>
                HomeCareHub made it incredibly easy to find a local cleaning
                service for my home. The reviews from other users helped me
                choose the right cleaning crew. They did an excellent job, and
                my house has never looked better. The only reason I didn&apos;t
                give a perfect score is that I&apos;d love to see even more
                service options on the platform. Great work, HomeCareHub team!
              </p>
            </div>
          </div>
          <div className="container shadow-drop-center flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src="https://randomuser.me/api/portraits/women/56.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Review by Sarah M.</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-yellow-500">
                <AiFillStar />
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div className="p-4 text-justify  text-sm dark:text-text_color_dark">
              <p>
                I was skeptical about using an online platform for home
                services, but HomeCareHub exceeded my expectations. I hired an
                electrician to fix some wiring issues, and I&apos;m impressed.
                The platform is convenient, and the electrician they connected
                me with was skilled and professional. I&apos;m giving it 4.5
                stars because there&apos;s always room for improvement, but
                I&apos;ll definitely use HomeCareHub again.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Review;
