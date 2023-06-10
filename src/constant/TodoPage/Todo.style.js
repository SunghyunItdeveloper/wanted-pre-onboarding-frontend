import styled from "styled-components";
export const TodoContainer = styled.div`
background-color: aliceblue;
display: flex;
width: 1250px;
margin: 0 auto;
justify-content: center;
  `
export const TodoWrapper = styled.div`
margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  @media only screen and (max-width:320px){
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4{
      font-size: small;
    }
  }
  @media only screen and (max-width:360px){
    width: 80vw;
    height: 90vh;
  
    h4{
      font-size: small;
    }
  }
  @media only screen and (max-width:411px){
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (max-width:768px){
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (max-width:1024px){
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (max-width:1280px){
    width: 30vw;
    height: 80vh;
  }
  `
export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`
export const TodoItem = styled.li`
  
`;

export const TodoInput = styled.input`
  
`;
export const ModifyInput = styled.input`
  
`;

export const TodoButton = styled.button`
 
`;
export const SubmitButton = styled.button`
 
`;
export const CancelButton = styled.button`
 
`;

