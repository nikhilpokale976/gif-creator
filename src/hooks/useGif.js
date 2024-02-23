import { useEffect, useState } from "react";
import axios from "axios";

const useGif = () => {

    const [images ,setimages]= useState('');
  const [loading , setloading] = useState(false);

async function fetchdata(){
        setloading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=qxkOB6zTv2HlgPkDyuite47uiL1kmUGm&tag=&rating=g`;
        const {data} = await axios.get(url);
        const image= data.data.images.downsized.url;
        setimages(image);
        setloading(false);
    }

    useEffect(() =>{
          fetchdata();
    },[]);

return {images , loading , fetchdata}


};

export default useGif;
