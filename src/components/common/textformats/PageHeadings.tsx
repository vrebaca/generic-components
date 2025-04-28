import styled from "styled-components";

export const TruncatedText = styled.span`
    text-align: left;
    overflow: hidden;
    -webkit-box-orient: vertical;
   -webkit-line-clamp: 4;
   display: -webkit-box;
   font-size: 14px;
`;

export const H2 = styled.h2`
font-family: 'Open Sans';
fontweight: 400;
`;

export const H4SemiBold = styled.h4`
    font-family: 'Open Sans';
    font-size: var(--fontsize-heading-H4);
    font-style: normal;
    font-weight: 600;
    line-height: var(--line-height-heading-H4);
    color: var(--textdefault);;
    display: inline-flex;
`;

export const LinkLgSemiBold = styled.a`
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 16px;
    color: var(--fiskaltrust);
    display: inline-flex;
    lineheight: 24px;
    padding: 0px 0px 0px 5px;
`;

export const TextBodyMdSemiBold = styled.span`
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 13px;
    color: var(--textdefault);
`;

export const TextBodySmSemiBold = styled.span`
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 12px;
    color: var(--textdefault);
    line-height: 17px;
`;