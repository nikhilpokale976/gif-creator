import Random from './components/Random'
import Tag from './components/Tag'


export default function App() {
  return (

            <div className='w-full h-full flex flex-col background items-center'>
              <h1 className="bg-white rounded-md w-11/12 text-center mt-[40px] pt-[10px] pb-[10px] text-2xl font-bold ">RANDOM GIFS</h1>
              <div className="flex flex-col mt-[20px] w-full items-center">
                <Random/>
                <Tag/>

              </div>
            </div>

  )
        
}
