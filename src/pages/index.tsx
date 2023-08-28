import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter()
  return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="flex flex-col h-full justify-center">
            <div 
              onClick={()=>{void router.push('/game')}}
              className="border-[5px] px-[50px] py-[20px] border-solid border-black text-xl rounded-[30px]">
                Start Game

              </div>
          </div>
        </div>
      </div>
  );
}
