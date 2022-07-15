import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
  

  input {
    border: 2px solid green;
    border-radius: 40px;
    width: 100%;
    height: 35px;
    padding: 20px;
    margin-bottom: 10px;
  }

  button {
    background-color: green;
    padding: 5px;
    margin-left: 10px;
    border-radius: 10px;
    border: 2px solid darkgreen;
    font-weight: bold;
    color: white;

    &:hover{
    box-shadow: 3px 2px 10px gray;
    background-color: darkgreen;
    border: 2px solid green;


    }
  }
`;
