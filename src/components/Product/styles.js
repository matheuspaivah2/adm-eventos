import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 400px;
  row-gap: 10px;
  cursor: pointer;
  height: auto;

  @media (min-width: 768px) {
    height: ${(props) => {
      if (props.btcolor === true) {
        return "400px";
      } else {
        return "500px";
      }
    }};
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
    color: #88e0fe;
    font-size: 1.8rem;
    text-align: center;
  }
  span {
    font-size: 1rem;
    margin-top: 5px;
  }
  p {
    font-size: 0.9rem;
    width: 90%;
    text-align: center;
    @media (min-width: 768px) {
      width: 300px;
    }
  }
  button {
    border: none;
    border-radius: 4px;
    padding: 8px;
    width: 80%;
    font-size: 1rem;
    margin-top: auto;
    background-color: #4dffe3;
    color: white;
    font-weight: bolder;
    cursor: pointer;
    border: 1px solid black;
    color: ${(props) => {
      if (props.btcolor === true) {
        return "white";
      } else {
        return "white";
      }
    }};

    background-color: ${(props) => {
      if (props.btcolor === true) {
        return "#080d0c";
      } else {
        return "#091523";
      }
    }};

    &:hover {
      border: 1px solid #d1184f;
      color: #d1184f;
    }
  }
`;
