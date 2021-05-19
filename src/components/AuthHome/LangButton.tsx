import styled from "styled-components";

export const LangButton = styled("button")`
  border: 2px solid #343a40;
  background: #f5f5f5;
  padding: 10px 15px;
  height: 50px;
  width: 100px;
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

  @media (max-width: 1000px) {
    margin: 0px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
