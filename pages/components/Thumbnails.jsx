import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnails = forwardRef(({ result }, ref) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div
        ref={ref}
        className="group cursor-pointer
    transition duration-200 transform ease-in
    sm:hover:scale-105 sm:m-2 hover:z-50"
      >
        <Image
          className=""
          layout="responsive"
          src={
            `${base_url}${result.backdrop_path || result.poster_path}` ||
            `${base_url}${result.poster_path} `
          }
          alt={result.poster_path}
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h1 className="text-2xl text-white mt-1 group-hover:font-bold transition-all duration-100 ease-in-out">
            {result.title || result.name}
          </h1>
          <p className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-100 ease-in-out">
            {result.media_type ? (
              <p className="uppercase mr-2 text-red-500">
                {result.media_type && `${result.media_type} `}{" "}
              </p>
            ) : null}
            {result.release_date || result.first_air_date}{" "}
            <ThumbUpIcon className="h-5 m-2" />
            {result.vote_count}
          </p>
        </div>
      </div>
    </>
  );
});

export default Thumbnails;
