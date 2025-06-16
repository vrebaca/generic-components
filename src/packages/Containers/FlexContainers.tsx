import styled from "styled-components";

export const FlexContainer950 = styled.div`
padding-left: 32px;
padding-right: 32px;
padding-bottom: 110px;
padding-top: 8px;
flex-grow:1;
display: flex;
flex-direction: column;
font-size: var(--fontsize-flexcontainer950);
color: var(--darkgrey);
max-width: 950px;
`;

export const FlexAlignGapContainer = styled.div.attrs({
  className: "d-flex align-items-center gap-1"
})``;

export const FlexColumnContainer = styled.div`
 display: flex;
 flex-direction: column;
`;