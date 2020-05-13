import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin-top: ${({ marginTop }) => marginTop};
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.color};

  & div {
    transform-origin: 40px 40px;
    animation: spin 1.2s linear infinite;
  }

  & div:after {
    position: absolute;
    top: 3px;
    left: 37px;
    display: block;
    content: "";
    border-radius: 20%;
    width: 6px;
    height: 18px;
    background: ${({ theme }) => theme.color};
  }

  & div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }

  & div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }

  & div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }

  & div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }

  & div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }

  & div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }

  & div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }

  & div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }

  & div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }

  & div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }

  & div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }

  & div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }

  @keyframes spin {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Spinner = ({ marginTop }) => {
  return (
    <Container marginTop={marginTop}>
      <Wrapper>
        {[...Array(12).keys()].map(x => (
          <div key={x} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Spinner;
