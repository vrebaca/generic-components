import styled from "styled-components";

export const DFlex = styled.div.attrs({ className: "d-flex flex-column" })`
    height: 100vh;
    overflowY: auto;
    padding: 20px;`;

type MarginProps = {
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
}

export const IBox = styled.div.attrs({
  className: "ibox"
})<MarginProps>`
    margin-top: ${(props:MarginProps) => props.marginTop || "0px"};
    margin-bottom: ${(props:MarginProps) => props.marginBottom || "0px"};
    margin-left: ${(props:MarginProps) => props.marginLeft || "0px"};
    margin-right: ${(props:MarginProps) => props.marginRight || "0px"};
`;

export const IBoxTitle = styled.div.attrs({ className: "ibox-title" })``;
export const IBoxContent = styled.div.attrs({ className: "ibox-content" })``;

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

export const BootstrapFlexAlignGap = styled.div.attrs({
  className: "d-flex align-items-center gap-1"
})``;