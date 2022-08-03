import { parseString } from "../javaScripts/parseString";
import { createRef } from "react";
import * as cookie from "cookie";
export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie;
  const parsedCookies = cookie.parse(cookies);
  const name = parsedCookies.name;
  console.log(name);
  return {
    props: { name }, // will be passed to the page component as props
  };
}

const Home = () => {
  const textAreaRef = createRef();
  return (
    <div className="w-screen h-screen max-h-screen flex flex-col">
      <div className="h-16 w-max" />
      <div className="w-full h-full flex items-center justify-center">
        <div className="h-2/3 max-h-max w-2/3 p-4 bg-gray-400 flex flex-col justify-around">
          <textarea
            className="w-full h-2/3"
            ref={textAreaRef}
            defaultValue="stoneham"
          />
          <button className="bg-red-300 h-1/5">hoplify</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
