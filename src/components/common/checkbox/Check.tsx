import React, { forwardRef } from "react";
import styled from "styled-components";

type CheckProps = {
    checkSize?: "normal" | "large" | "xlarge";
    verticalAlign?: "middle" | "top";
}

const mapSize = (props: CheckProps) => {
    if (props.checkSize === "normal") return "--size: 17px; --radius: .4rem;";
    if (props.checkSize === "large") return "--size: 20px; --radius: .45rem;";
    if (props.checkSize === "xlarge") return "--size: 40px; --radius: .5rem;";
}

const BootstrapCheck = styled.input<CheckProps>`
    ${(props: CheckProps) => mapSize(props)} //set vars
    width: var(--size);
    height: var(--size);
    margin: 0 !important;
    vertical-align: ${(props:CheckProps) => props.verticalAlign === "middle" ? "middle" : "top"};
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px solid rgba(0,0,0,.25);
    border-radius: var(--radius);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    cursor: pointer;

    &:active {
        filter: brightness(90%);
    }

    &:disabled {
        pointer-events: none;
        filter: none;
        opacity: .5;
    }

    &:focus {
        border-color: #1e6b80;
        outline: 0 !important;
        outline-offset: 0 !important;
        box-shadow: 0 0 0 var(--radius) rgba(48, 174, 209, 0.3);
    }

    &:checked {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
        background-color: #00A7CE;
        border-color: #00A7CE;
    }
`;

type CheckInterface = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & CheckProps;

export const Check = forwardRef(
    (props: CheckInterface, ref) => {
        return (<BootstrapCheck {...props} type="checkbox" checkSize={props.checkSize ?? "normal"} />);
    });
