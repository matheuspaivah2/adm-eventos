import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 100px;
  ul {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    list-style: none;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 100px;
  }
  span {
    text-align: center;
    margin: 0 auto;
    display: block;
    font-size: 1.5rem;
  }
`;
