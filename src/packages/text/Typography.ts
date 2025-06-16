import styled from "styled-components";

type HPorops ={
    IsInline?: boolean;
}

export const TruncatedText = styled.span`
    text-align: left;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    font-size: 14px;
`;

export const H1Light = styled.h1`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-heading-h1);
    line-height: var(--lineheight-heading-h1);
    color: var(--textdefault);
`;

export const H1Regular = styled.h1<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-heading-h1);
    line-height: var(--lineheight-heading-h1);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H1SemiBold = styled.h1<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-heading-h1);
    line-height: var(--lineheight-heading-h1);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H2Light = styled.h2<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-heading-h2);
    line-height: var(--lineheight-heading-h2);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H2Regular = styled.h2<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-heading-h2);
    line-height: var(--lineheight-heading-h2);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H2SemiBold = styled.h2<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-heading-h2);
    line-height: var(--lineheight-heading-h2);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H3Light = styled.h3<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-heading-h3);
    line-height: var(--lineheight-heading-h3);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H3Regular = styled.h3<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-heading-h3);
    line-height: var(--lineheight-heading-h3);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H3SemiBold = styled.h3<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-heading-h3);
    line-height: var(--lineheight-heading-h3);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H4Light = styled.h4<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-heading-h4);
    line-height: var(--lineheight-heading-h4);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H4Regular = styled.h4<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-heading-h4);
    line-height: var(--lineheight-heading-h4);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H4SemiBold = styled.h4<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-heading-h4);
    line-height: var(--lineheight-heading-h4);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H5Light = styled.h5<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-heading-h5);
    line-height: var(--lineheight-heading-h5);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H5Regular = styled.h5<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-heading-h5);
    line-height: var(--lineheight-heading-h5);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H5SemiBold = styled.h5<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-heading-h5);
    line-height: var(--lineheight-heading-h5);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H6Light = styled.h6<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-heading-h6);
    line-height: var(--lineheight-heading-h6);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H6Regular = styled.h6<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-heading-h6);
    line-height: var(--lineheight-heading-h6);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const H6SemiBold = styled.h6<HPorops>`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-heading-h6);
    line-height: var(--lineheight-heading-h6);
    color: var(--textdefault);
    display: ${(props: HPorops) => (props.IsInline ? "inline" : "block")};
`;

export const TextBodySmLight = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-body-sm);
    line-height: var(--lineheight-body-sm);
    color: var(--textdefault);
`;

export const TextBodySmRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-sm);
    line-height: var(--lineheight-body-sm);
    color: var(--textdefault);
`;

export const TextBodySmSemiBold = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-body-sm);
    line-height: var(--lineheight-body-sm);
    color: var(--textdefault);
`;

export const TextBodyMdLight = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-body-md);
    line-height: var(--lineheight-body-md);
    color: var(--textdefault);
`;

export const TextBodyMdRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-md);
    line-height: var(--lineheight-body-md);
    color: var(--textdefault);
`;

export const TextBodyMdSemiBold = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-body-md);
    line-height: var(--lineheight-body-md);
    color: var(--textdefault);
`;

export const TextBodyLgLight = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-body-lg);
    line-height: var(--lineheight-body-lg);
    color: var(--textdefault);
`;

export const TextBodyLgRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-lg);
    line-height: var(--lineheight-body-lg);
    color: var(--textdefault);
`;

export const TextBodyLgSemiBold = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-body-lg);
    line-height: var(--lineheight-body-lg);
    color: var(--textdefault);
`;

export const TextBodyXlLight = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-body-xl);
    line-height: var(--lineheight-body-xl);
    color: var(--textdefault);
`;

export const TextBodyXlRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-xl);
    line-height: var(--lineheight-body-xl);
    color: var(--textdefault);
`;

export const TextBodyXlSemiBold = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-body-xl);
    line-height: var(--lineheight-body-xl);
    color: var(--textdefault);
`;

export const TextBodyXxlLight = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-body-xxl);
    line-height: var(--lineheight-body-xxl);
    color: var(--textdefault);
`;

export const TextBodyXxlRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-xxl);
    line-height: var(--lineheight-body-xxl);
    color: var(--textdefault);
`;

export const TextBodyXxlSemiBold = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-body-xxl);
    line-height: var(--lineheight-body-xxl);
    color: var(--textdefault);
`;

export const TextBodyXxxlLight = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-body-xxxl);
    line-height: var(--lineheight-body-xxxl);
    color: var(--textdefault);
`;

export const TextBodyXxxlRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-xxxl);
    line-height: var(--lineheight-body-xxxl);
    color: var(--textdefault);
`;

export const TextBodyXxxlSemiBold = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-body-xxxl);
    line-height: var(--lineheight-body-xxxl);
    color: var(--textdefault);
`;

export const LinkSmLight = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-link-sm);
    line-height: var(--lineheight-link-sm);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkSmRegular = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-link-sm);
    line-height: var(--lineheight-link-sm);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkSmSemiBold = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-link-sm);
    line-height: var(--lineheight-link-sm);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkMdLight = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-link-md);
    line-height: var(--lineheight-link-md);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkMdRegular = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-link-md);
    line-height: var(--lineheight-link-md);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkMdSemiBold = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-link-md);
    line-height: var(--lineheight-link-md);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkLgLight = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-link-lg);
    line-height: var(--lineheight-link-lg);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkLgRegular = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-link-lg);
    line-height: var(--lineheight-link-lg);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkLgSemiBold = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-link-lg);
    line-height: var(--lineheight-link-lg);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXlLight = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-link-xl);
    line-height: var(--lineheight-link-xl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXlRegular = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-link-xl);
    line-height: var(--lineheight-link-xl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXlSemiBold = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-link-xl);
    line-height: var(--lineheight-link-xl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXxlLight = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-link-xxl);
    line-height: var(--lineheight-link-xxl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXxlRegular = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-link-xxl);
    line-height: var(--lineheight-link-xxl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXxlSemiBold = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-link-xxl);
    line-height: var(--lineheight-link-xxl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXxxlLight = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-light);
    font-size: var(--fontsize-link-xxxl);
    line-height: var(--lineheight-link-xxxl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXxxlRegular = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-link-xxxl);
    line-height: var(--lineheight-link-xxxl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const LinkXxxlSemiBold = styled.a`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-semibold);
    font-size: var(--fontsize-link-xxxl);
    line-height: var(--lineheight-link-xxxl);
    color: var(--fiskaltrust);
    display: inline-flex;
`;

export const TextButtonMdRegular = styled.span`
    font-family: var(--fontfamily-main);
    font-weight: var(--fontweight-regular);
    font-size: var(--fontsize-body-md);
    line-height: var(--lineheight-body-md);
`;