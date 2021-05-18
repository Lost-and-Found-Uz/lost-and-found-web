import styled from "styled-components";

export const LangButton = styled("button")`
  border: 2px solid #343a40;
  background: transparent;
  padding: 10px 15px;
  width: 70px;
  border-radius: 99px;
  color: #343a40;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background: rgba(128, 128, 128, 0.2);
  }
`;
