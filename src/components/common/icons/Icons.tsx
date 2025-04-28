import styled from "styled-components";

type IconProps = {
    fontsize?: string;
    marginright?: string;
    cursor?: string;
    hover?: boolean;
}

export const DefaultIcon = styled.i<IconProps>`
    color: var(--icondefault);
    font-size: ${(props:IconProps) => props.fontsize || "var(--fontsize-defaulticon)"};
    margin-right: ${(props:IconProps) => props.marginright || "0px"};
    cursor: ${(props:IconProps) => props.cursor || "default"};

    &:hover {
        color: ${(props:IconProps) => props.hover ? "var(--charocal-300)" : "var(--icondefault)"};
        }
`;

export const DefaultMdIcon = styled.i`
    color: var(--icondefault);
    font-size: var(--fontsize-mdicon);
    line-height: var(--lineheight-mdicon); 
    padding: 5px 0px 0px 5px;
`;