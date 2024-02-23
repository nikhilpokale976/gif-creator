import axios from "axios";
import { useEffect, useState } from "react";
import Sppinare from "./Sppinare";
  
 
 
 function Tag() {
  const [images ,setimages]= useState('');
  const[tag, settag]=useState('car');
  const [loading , setloading] = useState(false);
  
  async function fetchdata(){
          setloading(true);
          const url = `https://api.giphy.com/v1/gifs/random?api_key=qxkOB6zTv2HlgPkDyuite47uiL1kmUGm&tag=${tag}`;
          const {data} = await axios.get(url);
          const image= data.data.images.downsized.url;
          setimages(image);
          setloading(false);
      }
  
      useEffect(() =>{
            fetchdata(tag);
      },[]);
  
    return (
  
              <div className="w-6/12 bg-green-500 flex flex-col items-center rounded-md mt-10">
  
                        <h1 className="mt-[10px] mb-[10px] text-2xl font-bold">Random {tag} Gifs</h1>
                      {
                        loading ?  (<Sppinare/>): (<img src={images}></img>)
                      }
                        <input type='text'
                        className="mt-5 w-11/12 h-[40px] rounded-md text-center"
                        onChange={(event) => settag(event.target.value)}
                        value={tag}
                        ></input>
                        <button className="w-11/12 bg-yellow-300 p-3 mt-5 mb-3 rounded-md border border-black uppercase font-bold text-xl" onClick={()=>fetchdata()}>Genrate</button>
  
              </div>
  
    );
  }
  
 

export default Tag;
