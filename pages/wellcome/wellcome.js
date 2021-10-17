import Head from 'next/head'
// import Link from 'next/link'

import router, { useRouter } from 'next/router'


import cat from '../wellcome/cat1.svg'
import brgif from "../../components/xxx/brtest.jpg";



export default function wellcome(){
   const router = useRouter()

    const ClickHome=(e) => {
        e.prevenDefault()
        router.push(href)
    }
    
    return(
        <>
        <Head>
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



        </>
    )
    }