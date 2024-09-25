
import { useState, useEffect } from "react";
// >>>>>>> fc01d3ea32ea10c4b81fd4b75ce5407f1e242ef9
import Homepage from "./pages/home-page/HomePage";
// import LoadingPage from "./pages/loading-page/LoadingPage";

function App() {
  return (
    <div>
      <Homepage />
    
    </div>
  );
}

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000); 


//     return () => clearTimeout(timer);
//   }, []);

//   return <div>{loading ? <LoadingPage /> : <Homepage />}</div>;
// >>>>>>> fc01d3ea32ea10c4b81fd4b75ce5407f1e242ef9
// }

export default App;
