import styled from "styled-components";

type SpacingContainerProps = {
    margin?: string;
    padding?: string;
};

export const SpacingContainer = styled.div<SpacingContainerProps>`
    margin: ${(props: SpacingContainerProps) => props.margin || "0px"};
    padding: ${(props: SpacingContainerProps) => props.padding || "0px"};
`;