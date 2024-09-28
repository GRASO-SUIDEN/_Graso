import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="bg-[#24C2A5] flex justify-center items-center font-bold text-[2rem] h-[100vh]">
      Oops!! Seems you missed a step :( &nbsp;
      <Link to="/">Click here to go back</Link>
    </div>
  );
}

export default PageNotFound;
