import { useRouter } from "next/dist/client/router";
import React, { useRef } from "react";
import Requests from "../../utilities/Requests";
function NaviTitles() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const onWheel = (e) => {
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <div className="relative">
        <div
          ref={scrollRef}
          className="container flex space-x-10 
          overflow-x-scroll
          scrollbar-hide
          overflow-y-hidden
          select-none
          text-xl
          lg:space-x-20
          md:space-x-15
          lg:text-md
          px-10 lg:px-20
          h-10
          whitespace-nowrap"
          id="container"
          onWheel={onWheel}
        >
          {Object.entries(Requests).map(([key, { title, url }]) => (
            <h1
            onClick={()=>{
              router.push(`/?genre=${key}`)
            }}
              className="last:pr-16 cursor-pointer transform duration-100 transition hover:scale-125
            hover:text-white active:text-red-500"
              key={key}
            >
              {title}
            </h1>
          ))}
        </div>

        <div className="bg-gradient-to-l from-[#06202A] h-10 w-10 absolute right-0 top-0" />
      </div>
    </>
  );
}

export default NaviTitles;
