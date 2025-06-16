import styled from "styled-components";

export const ActionButton = styled.button`
border-radius: 10px;
background-color: transparent; 
border: none;
&:disabled {
        pointer-events: none;
        opacity: .5;
      }
&:focus{
        border: none;
        outline: none;
      }
`;