import { useRouter } from "next/router";
import Button from "../component/button";


export default function Home() {
  const router = useRouter()
  const onClick = () => {
    void router.push("/game")
  }
  return (
    <div className="flex h-screen justify-center">
      <Button text={'Start game'} onClick={onClick} />
    </div>
  );
}
