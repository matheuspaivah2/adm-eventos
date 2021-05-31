import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 570px;
  row-gap: 10px;
  cursor: pointer;

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
  button {
    border: 2px solid black;
    border-radius: 4px;
    padding: 8px;
    width: 80%;
    font-size: 1rem;
    margin-top: auto;
    background-color: #4dffe3;
    color: black;
    font-weight: bolder;
    cursor: pointer;
    color: ${(props) => {
      console.log(props.btcolor);
      if (props.btcolor === true) {
        return "black";
      } else {
        return "white";
      }
    }};

    background-color: ${(props) => {
      console.log(props.btcolor);
      if (props.btcolor === true) {
        return "#4dffe3";
      } else {
        return "#bc0000";
      }
    }};
  }
`;
