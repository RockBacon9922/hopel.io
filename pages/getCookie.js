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

const getCookie = ({ name }) => {
  return (
    <div className="w-full h-full flex content-center justify-center">
      <div className="bg-red-500">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default getCookie;
