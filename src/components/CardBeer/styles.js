import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;

    height: 600px;
  }
  @media (min-width: 900px) {
    column-gap: 5%;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    height: 600px;
    margin-top: 60px;
    row-gap: 20px;
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;

    @media (min-width: 768px) {
      width: 450px;
      height: 550px;
    }
  }
  h3 {
    color: #64d7ff;
    font-size: 2.2rem;
  }
  span {
    font-size: 1rem;
    margin-top: 5px;
  }
  p {
    font-size: 0.9rem;
    width: 300px;
    line-height: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  height: auto;
  width: 300px;
  column-gap: 10px;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;
  row-gap: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 700px;
    row-gap: 0px;
    height: 100px;
  }
  button {
    border: none;
    padding: 4px;
    width: 250px;
    height: 50px;
    border-radius: 4px;
    background-color: #130707;
    font-weight: bolder;
    font-size: 1.2rem;
    color: #64d7ff;
    cursor: pointer;
    border: 2px solid #07121c;

    &:hover {
      border: 2px solid white;
      color: white;
    }
    @media (min-width: 768px) {
    }
  }
`;

export const Legenda = styled.h4`
  margin: 0 auto;

  @media (min-width: 768px) {
    margin-top: 40px;
    font-size: 1.4rem;
  }
`;
