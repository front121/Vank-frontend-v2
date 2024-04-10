import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Thumbnail from "@/assets/Icon/Thumbnail.svg";
import ThumbnailTwo from "@/assets/Icon/ThumbnailTwo.svg";
import ThumbnailThree from "@/assets/Icon/ThumbnailThree.svg";
import ThumbnailFour from "@/assets/Icon/ThumbnailFour.svg";

const SuccessStories = ({
  selectCard,
  setSelectCard,
}: {
  selectCard: any;
  setSelectCard: (value: any) => void;
}) => {
  const cardItems = [
    {
      id: 1,
      img: Thumbnail,
      text: "optimizes the driver experience using Paymint as their main payment.",
      span: "Uber",
      description:
        "Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. ",
    },
    {
      id: 2,
      img: ThumbnailTwo,
      text: "sees an 8% increase in authorization rates with Paymint.",
      span: "WeBoth",
      description:
        "Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. ",
    },
    {
      id: 3,
      img: ThumbnailThree,
      text: "choose Paymint to power paid subscriptions globally.",
      span: "Asana",
      description:
        "Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. ",
    },
    {
      id: 4,
      img: Thumbnail,
      text: "optimizes the driver experience using Paymint as their main payment.",
      span: "Uber",
      description:
        "Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. ",
    },
    {
      id: 5,
      img: ThumbnailFour,
      text: "sees an 8% increase in authorization rates with Paymint.",
      span: "WeBoth",
      description:
        "Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. ",
    },
    {
      id: 6,
      img: ThumbnailThree,
      text: "choose Paymint to power paid subscriptions globally.",
      span: "Asana",
      description:
        "Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. Uber optimizes the driver experience using Paymint as their main payment. ",
    },
  ];

  const [width, setWidth] = useState(0);

  const carousel = useRef<any>(null);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F2F5F7] pt-[110px] pb-[110px] pl-[106px]">
      <h3 className="max-w-[105px] text-lg leading-none border-b-2 border-[#FFED00] text-[#161616] mb-3">
        Testimonios
      </h3>
      <h2 className="text-[58px] leading-[64px] mb-12">
        Su éxito también es nuestro
      </h2>
      <motion.div
        className="scroll-y w-full h-full flex items-center  overflow-y-auto pr-[82px] cursor-grab"
        ref={carousel}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width - 32 }}
          className="flex h-full items-center gap-[32px]"
        >
          {cardItems.map((item) => (
            <motion.div
              className="min-w-[410px] h-[450px] rounded-[24px] overflow-hidden"
              key={item.id}
            >
              <motion.img
                src={item.img}
                alt=""
                className="w-full object-cover h-[60%]"
                layoutId={`card-${selectCard?.id}`}
              />
              <div className="h-[40%] flex flex-col justify-center   gap-[25px] p-[30px] bg-[#FFFFFF] rounded-b-[24px]">
                <p className="text-[20px] leading-[28px]">
                  <span className="font-bold">{item.span}</span> {item.text}
                </p>
                <div
                  className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer"
                  onClick={() => {
                    setSelectCard(item);
                    document.body.style.overflow = "hidden";
                  }}
                >
                  <span className="font-bold">Read story</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[20px] font-bold"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessStories;
