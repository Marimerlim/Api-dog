import styled from "styled-components";

export const Title = styled.div`
  background-color: #b77;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    margin-bottom: 10px;
    color: white;
  }
  p {
    color: white;
  }
  button {
    margin: 10px;
    background-color: transparent;
    border: none;
    color: white;
    border-radius: 9px;
    padding: 5px;
  }
  button:hover {
    background-color: #b77068;
  }

  @media screen and (min-width: 400px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
