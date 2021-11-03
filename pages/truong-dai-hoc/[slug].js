import Head from "next/head";
import { getPlaceBySlug, setRequestToken } from "../../services/api";
import { useRouter } from "next/router";

import { useEffect, useState, useCallback } from "react";
import StarRatings from "react-star-ratings";
import ReviewForm from "../../components/dia-diem/review-form";
import SummaryStar from "../../components/dia-diem/summary-star";
import Map from "../../components/map";

import Review from "../../components/review";
import NavBar from "../../components/navbar/Navbar";

import { FiMapPin } from "react-icons/fi";
import nookies from "nookies";

import brtest from "../../components/xxx/brtest.jpg";
import br from "../truong-dai-hoc/banner.jpg";
import { useAuth } from "../../services/auth";

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  setRequestToken(cookies.token);
  const { status, data = null } = await getPlaceBySlug(context.query.slug);
  console.log(status);
  return {
    notFound: status === 404,
    props: {
      place: data,
    },
  };
}
export default function Place({ place }) {
  const router = useRouter();
  const { user } = useAuth();
  const login = () => {
    return router.push("/user/login");
  };
  const test = () => {
    return router.push("/xxx/test");
  };

  const [isShowRatingForm, setShowRatingForm] = useState(false);
  const hideRatingShow = useCallback(() => {
    setShowRatingForm(false);
  }, []);
  const showRatingShow = useCallback(() => {
    console.log("huhuhu");
    if (!user) {
      return router.push(
        `/user/login?redirect_uri=${router.asPath}?action=review`
      );
    }
    setShowRatingForm(true);
  }, [user, router.asPath]);

  useEffect(() => {
    if (router.query?.action === "review" && !!user) {
      setShowRatingForm(true);
    }
  }, [router.query, user]);

  return (
    <div className="w-full">
      <Head>
        <title>{place.name}</title>
      </Head>
      <NavBar user={user}></NavBar>
      <div
        className="w-full h-full pt-20 bg-xanhlo "
        style={{ backgroundImage: 'url("")' }}
      >
        <div className="container grid grid-cols-1 gap-0 p-2 pb-24 mx-auto md:grid-cols-5 md:gap-y-4 md:gap-x-4 md:mt-5">
          <div className="col-span-3">
            <h1 className="mb-2 text-2xl font-medium ">{place.name}</h1>
            <div className="flex items-center ">
              <StarRatings
                rating={place.star}
                starRatedColor="#ffbf00"
                numberOfStars={5}
                starDimension="20px"
                name="rating"
                starSpacing="2px"
              />
              <div className="items-center ml-2 font-medium">
                ({place.star.toFixed(1)})
              </div>
            </div>
            <p className="flex items-center inline-block mt-3 mb-3 text-sm ">
              <FiMapPin></FiMapPin>
              {place.address}
            </p>

            <div className="">{place.description} </div>
          </div>
          <div className="col-span-2 ">
            <Map
              height="326px"
              name={place.name}
              coordinates={[...place.location.coordinates].reverse().join(",")}
            ></Map>
          </div>
        </div>
      </div>

      <div className="container mx-auto mb-8 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 lg:gap-x-4">
          {/* LEFT COLUMN */}
          <div className="col-span-2 rounded-md xl:col-span-3 bg-gray-50">
            {/* REVIEW SECTION */}
            <Review place={place} reviews={place.reviews} />
            {/* END REVIEW SECTION */}
          </div>
          {/* END LEFT COLUMN */}

          {/* RIGHT COLUMN */}
          <div className="col-span-1">
            <SummaryStar
              showRatingShow={showRatingShow}
              name={place.name}
              slug={place.slug}
            />
          </div>
          {/* END RIGHT COLUMN */}
        </div>
      </div>

      <ReviewForm
        visible={isShowRatingForm}
        hideRatingShow={hideRatingShow}
        place={place}
      ></ReviewForm>

      <footer className="relative flex py-16 pt-1 my-24 border-b-2 border-blue-700 footer bg-xanh31c2b8">
        <div className="container px-6 mx-auto">
          <div className="sm:flex sm:mt-8">
            <div className="flex flex-col justify-between mt-8 sm:mt-0 sm:w-full sm:px-8 md:flex-row">
              <div className="flex flex-col text-lg font-BlinkMacSystemFont text-GhostWhite ">
                <span className="mt-4 mb-2 font-bold text-gray-700 uppercase md:mt-0">
                  REVIEW CÔNG TY
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-blue-700 text-md hover:text-blue-500"
                  >
                    Giải đáp thắc mắc - Yêu cầu xoá riview
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-blue-700 text-md hover:text-blue-500"
                  >
                    Yêu cầu thêm công ty
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-blue-700 text-md hover:text-blue-500"
                  >
                    Điều khoản sử dụng
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  /*<div className="bg-black ">
          <header className="w-full text-gray-100 shadow bg-FFE1FF body-font">
            <div className="container flex flex-col flex-wrap items-center p-2 mx-auto md:flex-row">
              <img
                src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/48427248_382665845802353_2135083600675078144_n.png?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IGAXOh6mIB0AX-zV8Np&_nc_oc=AQmM-GibVWZAKntIHRpMuMu-22y28hsAqm40E4mSvXDWtJKBCckYjdvkqboS928OIzw4EYF8eZ1RCZFTh-kPUR51&_nc_ht=scontent-sin6-2.xx&oh=6fb8df698297f31b8c49a96d51ca6b25&oe=60D560E8"
                style={{ height: 40, marginTop: 10, marginBottom: 10 }}
                alt="logo"
              />
              <span className="ml-3 text-xl">Ở Đây Có Review Nè</span>
              {/*<div className="relative pt-2 mx-auto text-gray-600">
            <input
              className="h-10 px-20 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
              <svg
                className="w-4 h-4 text-gray-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
  </div>
            </div>
          </header>
        </div>*/
}
