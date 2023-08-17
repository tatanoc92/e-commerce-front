import { css, styled } from "styled-components";

export const ButtonStyle = css`
  border: none;
  background-color: #7f8c8d;
  color: #2c3e50;
  transition: all 0.5s;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: space-around;
  width: 150px;
  margin: 5px;
  svg {
    height: 20px;
  }
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #95a5a6;
    box-shadow: 0 10px 20px rgba(149, 165, 166, 0.5);
  }

  &:hover:after {
    opacity: 1;
    right: 20px;
  }

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.black &&
    css`
      background-color: #000;
      color: #fff;
      border: 1px solid #000;
    `}  

  ${(props) =>
    props.primary &&
    css`
      background-color: #f4511e;
      border: 1px solid #fff;
      color: #ffffff;
      transition: all 0.5s;

      &:hover {
        background-color: #f1802d;
        box-shadow: 0 10px 20px rgba(241, 80, 37, 0.5);
      }
    `}

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 1px solid #fff;
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 10px;
      svg {
        height: 26px;
      }
    `}

      ${(props) =>
    props.size === "s" &&
    css`
      width: 50px;
    `}
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
