import styled from "styled-components";

type Props = {
    margin?: string;
    padding?: string;
    cursor?: string;
    height?: string;
}

export const IBox = styled.div.attrs({
  className: "ibox"
})<Props>`
    display: flex;
    flex-direction: column;
    margin: ${(props:Props) => props.margin || "0px"};
    padding: ${(props:Props) => props.padding || "0px"};
    cursor: ${(props:Props) => props.cursor || "default"};
    height: ${(props:Props) => props.height || "auto"};
`;

export const IBoxTitle = styled.div.attrs({ className: "ibox-title" })``;
export const IBoxContent = styled.div.attrs({ className: "ibox-content" })<Props>`
    flex: 1;
    margin: ${(props:Props) => props.margin || "0px"};
    padding: ${(props:Props) => props.padding || "0px"};
`;

export const IBoxFooter = styled.div.attrs({ className: "ibox-footer" })<Props>`
    margin: ${(props:Props) => props.margin || "0px"};
    padding: ${(props:Props) => props.padding || "0px"};
`;


export const CenterContentContainer = styled.div.attrs({ className: "justify-content-center" })``;

export const BootstrapRow = styled.div.attrs({ className: "row" })``;

export const ColMd8 = styled.div.attrs({ className: "col-md-8" })`
padding-left: 1px;
padding-right: 1px;
`;
export const ColMd4 = styled.div.attrs({ className: "col-md-4" })`
padding-left: 1px;
padding-right: 1px;
`;
export const ColMd9 = styled.div.attrs({ className: "col-md-9" })`
padding-left: 1px;
padding-right: 1px;
`;
export const ColMd3 = styled.div.attrs({ className: "col-md-3" })`
padding-left: 1px;
padding-right: 1px;
`;
export const Clearfix = styled.div.attrs({ className: "clearfix" })``;