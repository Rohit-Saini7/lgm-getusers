import React, { useState } from "react";
import styled from "styled-components";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import User from "./components/User";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const handleClick = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((respose) => respose.json())
      .then((respose) => {
        setUsers(respose.data);
        setIsLoading(false);
      })
      .catch(() => {
        console.error("Unable to fetch user list");
        setIsLoading(false);
      });
  };
  return (
    <React.Fragment>
      <Navbar handleClick={handleClick} isLoading={isLoading} />
      <Section>{isLoading ? <Loading /> : <User users={users} />}</Section>
    </React.Fragment>
  );
}

export default Home;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
