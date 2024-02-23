
import useGif from "../hooks/useGif";
import Sppinare from "./Sppinare";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {

     const {images , loading , fetchdata}=useGif();

  return (

            <div className="w-6/12 bg-green-500 flex flex-col items-center rounded-md">

                      <h1 className="mt-[10px] mb-[10px] text-2xl font-bold">Random Gifs</h1>
                      {
                        loading ? (<Sppinare/>):(<img src={images}></img>)
                      }
                      <button className="w-11/12 bg-yellow-300 p-3 mt-10 mb-3 rounded-md border border-black uppercase font-bold text-xl" onClick={()=>fetchdata()}>Genrate</button>

            </div>

  );
}

export default Random
