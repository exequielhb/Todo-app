import styled from "styled-components";

export const StyledHome = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&display=swap');

  

  


  
  
  & h4 {
    color: white;
  }
  

  & form {
    & button {
      width: 45%;
      padding: 15px;
      margin: 9px 6px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }

  & .container {
    border: 1px solid white;
    margin-top: 3%;
    border-radius: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    & h3 {
      color: white;
      font-size: 1.8rem;
      margin-bottom: 0%;
    }

    & p {
      color: white;
      font-size: 1.2rem;
    }
  }
`;

export const H1Style = styled.h1`
  color: #9055ff;
  font-size: 3rem;
  font-weight: 700;
`;
