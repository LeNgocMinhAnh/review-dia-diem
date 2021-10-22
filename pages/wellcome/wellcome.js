import Head from "next/head";
// import Link from 'next/link'
import { getPlace } from "../../services/api";

import router, { useRouter } from "next/router";

import cat from "../wellcome/cat1.svg";
import brgif from "../../components/xxx/brtest.jpg";

export async function getServerSideProps(context) {
  const { data } = await getPlace();
  console.log("data");
  return {
    props: {
      places: data.results,
    },
  };
}

export default function wellcome({ places }) {
  const router = useRouter();

  const ClickHome = (e) => {
    e.prevenDefault();
    router.push(href);
  };

  return (
    <>
      {/* <Head>
            <title>Welcome to Review</title>
        </Head>
            <div className="h-screen flex flex-col bg-bg5F939A justify-items-center place-items-center">
                <div className="h-screen overflow-auto mt-40">
                    <img src={cat} className="justify-items-center z-10"></img>  
                        <div className=" h-auto -mt-40 z-20"></div>
                        
                        <div className="text-center pt-40 z-10">
                            <button type="button" onClick={()=>router.push('/user/login')}
                            className=" border-4 border-white rounded-2xl h-16 w-full overflow-auto z-10 bg-#31c2b8">
                                
                            
                                <img src={brgif} className="w-full h-4/5 object-cover overflow-auto "></img>
                                <p className="font-bold font-BlinkMacSystemFont -mt-10 text-4xl h-4/5 w-full text-GhostWhite overflow-auto text-center justify-between  z-20">
                                GO GO GO !!!
                                </p>
                                
                                
                            </button>
                        </div>
                      
                </div>
                
                
            </div>
            */}

      <>
        <div className="container">
          <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white">
              {places.map((place, index) => (
                <tr key={place.id} className="bg-purple-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left" width="110px">
                    Actions
                  </th>
                </tr>
              ))}
            </thead>
            <tbody className="flex-1 sm:flex-none">
              {places.map((place, index) => (
                <tr
                  className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 "
                  key={place.id}
                >
                  <td className="border-grey-light border hover:bg-gray-100 p-3 ">
                    <p className="line-clamp-1">
                    {place.name}
                    </p>
                    
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                    {place.description?place.description :'chuwa cos'}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                    Delete
                  </td>
                </tr>
              ))}
              
              
              
              
            </tbody>
          </table>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  html,\n  body {\n    height: 100%;\n  }\n\n  @media (min-width: 640px) {\n    table {\n      display: inline-table !important;\n    }\n\n    thead tr:not(:first-child) {\n      display: none;\n    }\n  }\n\n  td:not(:last-child) {\n    border-bottom: 0;\n  }\n\n  th:not(:last-child) {\n    border-bottom: 2px solid rgba(0, 0, 0, .1);\n  }\n",
          }}
        />
      </>
    </>
  );
}
