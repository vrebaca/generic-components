import styled from "styled-components";

export const IconButton = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50px;
    padding-top: 5px;
    background: var(--neutral-100);
    border: 1px solid var(--neutral-100);
    justify-content: center;
    display: inline-flex;
    margin: 1px;

    &:hover {
        background: var(--petrol-100);
        border: 1px solid var(--petrol-100);
    }
        
    &:hover i {
        color: var(--fiskaltrust) !important;
    }
`;