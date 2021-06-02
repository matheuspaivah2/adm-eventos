import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const Logo = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #64d7ff;
`;

export const ButtonMenu = styled.button`
  border: none;
  font-family: "Righteous, cursive";

  background-color: #130707;
  font-size: 110%;
  color: white;
  margin-right: 8px;
  border-radius: 4px;
  cursor: pointer;
  display: none;
  &:hover {
    background-color: white;
    color: #130707;
  }

  @media (min-width: 768px) {
    font-size: 130%;
    display: inline-block;
  }
`;

export const Hamburg = styled(GiHamburgerMenu)`
  font-size: 30px;
  cursor: pointer;
  align-self: flex-end;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Vl = styled.div`
  display: none;
  @media (min-width: 768px) {
    border-left: 2px solid white;
    height: 30px;
    margin-right: 8px;
    display: inline-block;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  z-index: 5;
  background-color: #130707;
  border-radius: 4px;
  padding: 4px;

  &:hover Button {
    display: block;
    align-self: flex-start;
  }
  &:hover {
    margin-top: 80px;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    &:hover Button {
      align-self: auto;
    }
    &:hover {
      margin-top: 0px;
    }
  }
`;
