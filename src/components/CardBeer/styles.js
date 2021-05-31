import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  z-index: 3;
  position: absolute;
  background-color: #000000c4;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  figure {
    width: 150px;
    height: 150px;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
  }
  h3 {
    color: #4dffe3;
  }
  span {
    font-size: 1rem;
    margin-top: 5px;
  }
  p {
    font-size: 0.9rem;
    width: 300px;
  }
`;

export const Blackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
`;
