import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ color }) => color};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Righteous", cursive;
  color: white;
  position: relative;
`;
