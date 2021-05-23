import styled from "styled-components";

export const HOME_SEARCH_FIELD = styled("input")`
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  font-size: 20px;
  margin: 0px 15px;
  outline-color: #6c757d;
  padding: 0% 1%;
  text-overflow: ellipsis;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
