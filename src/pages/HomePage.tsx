import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center">
      <div className="item-center flex w-full flex-col justify-center">
        <p className="text-center text-2xl font-bold">Home Page</p>
        <div className="flex gap-3 self-center">
          <Link to={"/login"} className="text-blue-800 underline">
            login
          </Link>
          <Link to={"/regisgter"} className="text-blue-800 underline">
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
