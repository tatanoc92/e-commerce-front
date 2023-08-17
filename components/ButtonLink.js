import Link from "next/link";
import styled from "styled-components";
import { ButtonStyle } from "./Button";

const StyledButtonLink = styled(Link)`
  ${ButtonStyle};
  text-decoration: none;
`;

export default function ButtonLink(props) {
  return <StyledButtonLink {...props}></StyledButtonLink>;
}
