import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { relativeJob } from "@/constant/Constant";
import "@/app/globals.css";
// import CustomSwiper from '../components/CustomSwiper';
// Import Swiper styles
import "swiper/css";

const Relative = () => {
  const userphoto =
    "https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?size=626&ext=jpg&ga=GA1.1.2077699082.1681132836&semt=sph";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
      {relativeJob.map((job: any, i: number) => (
        <div
          key={i}
          className="bg-white rounded overflow-hidden group shadow-md"
        >
          <Swiper
            // navigation={{
            //   nextEl: '.custom-swiper-button-next',
            //   prevEl: '.custom-swiper-button-prev',
            // }}
            navigation={true}
            modules={[Navigation]}
            // spaceBetween={20}

            className=" custom-swiper-button "
          >
            {job.picture.map((image: any, i: number) => (
              <SwiperSlide key={i}>
                <div className="h-52 border-b">
                  <Image
                    src={image}
                    alt="Vercel Logo"
                    className="w-full h-full"
                    width={550}
                    height={120}
                    objectFit="cover"
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pt-4 pb-3 px-4">
            <div className="flex items-center gap-4 mb-10">
              <div>
                <Image
                  src={userphoto}
                  alt="Vercel Logo"
                  className="rounded-full "
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="flex justify-between flex-grow ">
                <div>
                  <h2 className="text-lg text-gray-800 font-bold hover:text-red-600">
                    {job.name}
                  </h2>
                  <p className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <span>
                      {job.ratings} ({job.reviews.length})
                    </span>
                  </p>
                </div>
                <div>
                  <p>Level {job.level}</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-lg  font-semibold">{job.work_category}</h2>
              <small className="text-xs">{job.description}</small>
            </div>
            <div className="flex items-center justify-between gap-4  py-3 ">
              <small className="text-xs ">${job.totalHourRate}/hr</small>
              <small className="text-xs">${job.totalEarn} Earned</small>
            </div>

            <div className="flex justify-between items-center">
              <div className="">
                <small className="text-xs block">
                  {job.jobSuccuss}% job success
                </small>
                <input
                  type="range"
                  className="w-24 h-1"
                  value={job.jobSuccuss}
                />
              </div>
              <p className=" font-bold bg-multi-primary py-2 px-4 text-white rounded-2xl">
                {" "}
                Price: ${job.price}{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Relative;
