import Head from "next/head";
import Image from 'next/image'
import {getRecentReview} from "../services/api"
import Review from "../components/review"
import Test from '../components/xxx/test'


export async function getServerSideProps(context){
  const {data} = await getRecentReview();
    return {
    props: {
      reviews: data.results
    }
  }
  
}


export default function Home({reviews, user}) {
  return (
    <>
    
      <Test reviews={reviews} user={user}></Test>
     {/* <header className="text-gray-100 bg-primary body-font shadow w-full">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <img
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/48427248_382665845802353_2135083600675078144_n.png?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IGAXOh6mIB0AX-zV8Np&_nc_oc=AQmM-GibVWZAKntIHRpMuMu-22y28hsAqm40E4mSvXDWtJKBCckYjdvkqboS928OIzw4EYF8eZ1RCZFTh-kPUR51&_nc_ht=scontent-sin6-2.xx&oh=6fb8df698297f31b8c49a96d51ca6b25&oe=60D560E8"
            style={{ height: 50, marginTop: 10, marginBottom: 10 }}
            alt="logo"
          />
          <span className="ml-3 text-xl">Ở Đây Có Review Nè</span>
          <div className="pt-2 relative mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-20 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
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

      <div className=" flex mx-auto w-full md:w-1/2 md:px-0 mx-0 items-center justify-start">
        <ul className="flex flex-col bg-purple-400  p-4">
        <Review reviews={reviews}/>
        </ul>
  </div>*/}
    </>
  );
}
