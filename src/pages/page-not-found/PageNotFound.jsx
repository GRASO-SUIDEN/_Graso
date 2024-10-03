import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center font-bold h-[100vh] space-y-4 bg-[#E6F7F8]">
      <h1 className="text-[2rem]">404</h1>
      <p className="text-[1.2rem]">
        Don&apos;t Worry You are not lost. It&apos;s just the page that ran into
        problems.
      </p>
      <Link
        to="/"
        className="bg-[#24C2A5] text-white rounded-lg w-[20rem] h-[2rem] text-center text-[1.2rem]"
      >
        Back to HomePage
      </Link>
    </div>
  );
}

export default PageNotFound;
