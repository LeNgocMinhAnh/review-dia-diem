import Link from "next/link";
import StarRatings from "react-star-ratings";
import { formatTime } from "../services/time";

export default function Review({ place, reviews }) {
  return reviews.map((review, index) => (
    <div key={review.id} className="p-4 md:p-8 w-full border-gray-200 border-0 divide-y divide-gray-300 ">
      <div className="flex items-start   ">
        <div className="flex-shrink-0">
          <div className="inline-block relative">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                src={review.author.displayImage}
                alt="Profile picture"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner" />
            </div>
            <svg
              className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z "
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="m-4 md:ml-6 w-full -mt-1 ">
          <p className="inline-block items-baseline ">
            <span className="text-gray-600 font-bold cursor-pointer">
              {review.author.displayName}
            </span>
            <span className="text-green-600 font-medium mx-2">đã review</span>
            <Link href={place?.url || review.place?.url}>
              <span className="text-green-600 hover:text-green-800 font-bold cursor-pointer">
                {place?.name || review.place?.name}
              </span>
            </Link>
          </p>
          <div className="-mt-0.5 flex">
            <StarRatings
              rating={review.star}
              starRatedColor="#ffbf00"
              numberOfStars={5}
              starDimension="15px"
              name="rating"
              starSpacing="3px"
            />
          </div>

          <div className="flex mt-4 text-gray-600">
            <div className="flex items-center">
              <span className="text-sm">{formatTime(review.createdAt)}</span>
            </div>
          </div>
          <div className="mt-3 text-left  ">
            <span className="font-bold">{review.title}</span>
            <p className="not-italic whitespace-pre-wrap">{review.content}</p>
          </div>
          {review.images.length > 0? <div className="grid grid-cols-5 gap-2 py-2">
            {review.images.map((src) => <img key={src} className="h-40 w-full object-cover" src={src} /> )}
          </div> :null}
          

          <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
            <button className="flex items-center">
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
              </svg>
              <span className="ml-2">Share</span>
            </button>
            <div className="flex items-center">
              <button className="flex items-center ml-6">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                </svg>
                <span className="ml-2">{review.totalLikes}</span>
              </button>
              <button className="flex items-center ml-4">
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                </svg>
                <span className="ml-2">{review.totalDislikes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className=""></hr>
    </div>
  ));
}
