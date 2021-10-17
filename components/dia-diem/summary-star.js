import { getSummaryPlaceBySlug } from "../../services/api";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

function getPercent(percent) {
  if (!percent) {
    return "0%";
  }
  return percent.toFixed(2) + "%";
}

function Item({ count, star, percent }) {
  return (
    <div className="flex items-center mt-1">
      <div className="w-14 text-yellow-600 tracking-tighter">
        <span>
          {star}{" "}
          <svg
            viewBox="0 0 20 20"
            fill="#FF9529"
            className="h-4 inline-block mb-1"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
          </svg>
        </span>
      </div>
      <div className="w-full">
        <div className="bg-gray-300 w-full rounded-lg h-2">
          <div
            className="bg-yellow-500 rounded-lg h-2 transition-all duration-1000"
            style={{ width: getPercent(percent[star]) }}
          />
        </div>
      </div>
      <div className="w-8 text-gray-700">
        <span className="text-sm flex justify-end">{count[star]}</span>
      </div>
    </div>
  );
}

export default function SummaryStar({ slug, name, showRatingShow }) {
  const [summary, setSummary] = useState({
    totalReviews: 0,
    percent: {},
    count: {},
  });

  useEffect(() => {
    getSummaryPlaceBySlug(slug)
      .then(({ data }) => {
        if (data) {
          setSummary(data);
        }
      })
      .catch(console.log);
  }, []);

  return (
    <div className="bg-white  py-4 px-4 text-center rounded-md shadow-lg  w-full	">
      <h2 className="text-gray-800 text-xl font-semibold mb-2">
        <CountUp duration={1} start={0} end={summary.totalReviews} /> đánh giá
      </h2>
      <div className="border-b w-full pb-3">
        <Item count={summary.count} percent={summary.percent} star="5" />
        <Item count={summary.count} percent={summary.percent} star="4" />
        <Item count={summary.count} percent={summary.percent} star="3" />
        <Item count={summary.count} percent={summary.percent} star="2" />
        <Item count={summary.count} percent={summary.percent} star="1" />
      </div>
      <div className="w-full px-4">
        <h3 className="font-medium mt-3 tracking-tight">
          <span className="text-gray-700">Review</span> {name}
        </h3>
        <p className="text-gray-700 text-sm py-1">
          Đóng góp ý kiến của bạn về địa điểm này.
        </p>
        <button
          onClick={showRatingShow}
          className="bg-xanh31c2b8 text-white px-3 py-1 rounded text-GhostWhite mt-2"
        >
          Đánh giá ngay
        </button>
      </div>
    </div>
  );
}
