import { CgSearchLoading } from "react-icons/cg";
import { useCallback, useState , useRef, useEffect} from "react";
import { getPlaceBySearch } from "../services/api";
import Link from "next/link";


export default function Search() {
    const [searchText, setSearchText] = useState('');
    const [places, setPlaces] = useState([]);
    const timeoutID = useRef(null);
    const setSearchTextChange = useCallback((event) => {
        setSearchText(event.target.value);
    }, [])
    const callSearch = useCallback(() => {
        if(!searchText.length){
           if(timeoutID.current){
               clearTimeout(timeoutID.current);
               timeoutID.current = null
           }
           setPlaces([]);
           return;
        }
        getPlaceBySearch(searchText).then(({data}) => setPlaces(data.results));
    },[searchText])

    useEffect(() => {
        if(timeoutID.current){
            clearTimeout(timeoutID.current);
            timeoutID.current = null;
        }
        timeoutID.current = setTimeout(callSearch, 100)
    },[searchText])

  return (
      <>
    <div className="bg-white flex items-center rounded-full shadow-xl inset-2 w-full  " style={{ height: 'fit-content' }}>
      <input
        className="rounded-full w-full py-4 px-6 text-gray-700  focus:outline-none pl-8 pr-4"
        id="search"
        type="text"
        placeholder="Tìm kiếm ở đây nè !"
        value={searchText}
        onChange={setSearchTextChange}
      />

      <div className="overflow-auto">
        
      </div>


    </div>
    <div style={{ maxHeight: '50vh' }} className={` overflow-y-auto rounded-b-md w-full`}>
        {places.map((place) => (
          <Link key={place.id} href={place.url}>
            <div className="px-4 text-left transition-all duration-300 py-2 hover:text-blue-800 hover:bg-gray-100 hover:shadow cursor-pointer" >
              <span className="block truncate font-medium">{place.name}</span>
              <span className="block truncate text-xs mt-0.5">
                <svg className="h-3.5 w-3.5 fill-current inline-block mb-1 mr-1" xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512">
                <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
                          c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
                          C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
                          s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
              </svg>{place.address}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
