import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 32vw;
  margin-top: 20vh;
  margin-left: 34vw;
  border: 3px solid #d3d3d3;
  border-radius: 5px;
  color: #808080;
  background-color: #f5f5f5;

  section {
    margin-left: 1vw;
  }

  h1 {
    color: #4f4f4f;
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  label {
    color: #4f4f4f;
  }
  input {
    height: 25px;
    border-radius: 5px;
    margin-top: 5px;
    border: none;
    background-color: #dcdcdc;
    outline: 0;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    height: 30px;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    color: white;
    background-color: #808080;
    border: none;
    border-radius: 3px;
    margin-left: 6vw;
  }

  .menu {
    background-color: #dcdcdc;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
