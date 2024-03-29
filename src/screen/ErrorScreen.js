import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
import useTitle from "../useTitle";

const ErrorScreen = () => {
  useTitle("ERROR");
  return (

    <Wrapper>
      <h3>Page Not Found</h3>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          reverse: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={350}
        height={350}
      />
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  
  margin-bottom: 3rem;
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
