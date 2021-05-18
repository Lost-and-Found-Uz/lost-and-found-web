import styled from "styled-components";

// WORKS 🎉
export const Icon = styled(MaterialIcon)`
  background-color: green;
  /* font-size: 50px; */
`;

export function MaterialIcon(props: { className: string }) {
  return <i className={`material-icons ${props.className}`}>account_balance</i>;
}
