import Cookies from "js-cookie";
import { useRouter } from "next/router";
const SetCookie = () => {
  const router = useRouter();
  const { accessToken } = router.query;
  Cookies.set("accessToken", accessToken);
  return (
    <div className="w-screen h-screen">
      <div className="h-20" />
      <div className="w-full h-full flex items-center justify-center">
        <button className="bg-red-500 h-20" onClick={() => router.push("/")}>
          go to home
        </button>
      </div>
    </div>
  );
};

export default SetCookie;
