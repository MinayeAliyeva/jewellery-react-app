import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
      <div>Home Page</div>
      <button onClick={() =>navigate("/about")}>Go to About page</button>
    </div>
  );
};

export default Home;
