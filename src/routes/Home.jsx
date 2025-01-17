import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPots = async () => {

    try{
        const response = await axios.getPots
    } catch{}
    // console.log("testando");
  };

  useEffect(() => {
    getPots();
  }, []);

  return <div>Home</div>;
};

export default Home;
