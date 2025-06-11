import React from "react";
import styled from "styled-components";

type Size = "normal" | "small" | "large" | "xsmall";

type ButtonProps = {
    btnType: "primary" | "secondary" | "danger";
    size: Size
};

const mapSize = (size: Size) => {
    if (size === "normal") return "border-radius: .4rem; padding: .6rem 1.2rem; font-size: 1.6rem;";
    if (size === "small") return "border-radius: .3rem; padding: .4rem 0.8rem; font-size: 1.4rem;";
    if (size === "xsmall") return "border-radius: .3rem; padding: .2rem 0.6rem; font-size: 1.2rem; line-height: 1.5;";
    if (size === "large") return "border-radius: .5rem; padding: .8rem 1.6rem; font-size: 2.0rem;";
}

const BootstrapBtn = styled.button<ButtonProps>`    
    color: #FFFFFF;
    background-color: ${(props: ButtonProps) => props.btnType === "primary" ? "#30add1" : (props.btnType === "danger" ? "#ED5565" : "#6c757d") };
    border-color: ${(props: ButtonProps) => props.btnType === "primary" ? "#30add1" : (props.btnType === "danger" ? "#ED5565" : "#6c757d")};
    border: ${(props: ButtonProps) => props.btnType === "danger" ? "none" : "1px solid transparent"};
    ${(props: ButtonProps) => mapSize(props.size)} //set font-size, padding, border-radius
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    margin-left:4px;
    margin-right:4px;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover,
    &:active,
    &:focus {
        background-color: ${(props: ButtonProps) => props.btnType === "primary" ? "#1e6b80" : (props.btnType === "danger" ? "#8B0000" : "#565e64")};
        border-color: ${(props: ButtonProps) => props.btnType === "primary" ? "#1e6b80" : (props.btnType === "danger" ? "#ED5565" : "#565e64")};
    };

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.4rem ${(props: ButtonProps) => props.btnType === "primary" ? "rgba(63,125,143,.5)" : "rgba(130,138,145,.5)"};
    };

    &:disabled {
        pointer-events: none;
        opacity: .65;
      }
`;

const OutlineBtn = styled.button<ButtonProps>`
    color: ${(props: ButtonProps) => props.btnType === "primary" ? "#30add1" : (props.btnType === "danger" ? "#ED5565" : "#6c757d")};
    background-color: transparent;
    border: 1px solid transparent;
    border-color: ${(props: ButtonProps) => props.btnType === "primary" ?  "#30add1" : (props.btnType === "danger" ? "#ED5565" : "#6c757d")};
    ${(props: ButtonProps) => mapSize(props.size)} //set font-size, padding, border-radius
    margin-left:2px;
    margin-right:2px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
   
    &:hover,
    &:active {
        color: #FFFFFF;
        background-color: ${(props: ButtonProps) => props.btnType === "primary" ? "#1e6b80" : (props.btnType === "danger" ? "#ED5565" : "#565e64")};
        border-color: ${(props: ButtonProps) => props.btnType === "primary" ? "#1e6b80" : (props.btnType === "danger" ? "#ED5565" : "#565e64")};
    };

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.4rem ${(props: ButtonProps) => props.btnType === "primary" ? "rgba(63,125,143,.5)" : "rgba(130,138,145,.5)"};
    };

    &:disabled {
        pointer-events: none;
        opacity: .65;
      }
`;

export const PrimaryButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="primary" size="normal" {...props} />);
    }

export const PrimaryButtonSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="primary" size="small" {...props} />);
    }

export const PrimaryButtonXSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="primary" size="xsmall" {...props} />);
    }

export const PrimaryButtonLarge =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="primary" size="large" {...props} />);
    }

export const PrimaryOutlineButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="primary" size="normal" {...props} />);
    }

export const PrimaryOutlineButtonSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="primary" size="small" {...props} />);
    }

export const PrimaryOutlineButtonLarge =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="primary" size="large" {...props} />);
    }
export const PrimaryOutlineButtonXSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="primary" size="xsmall" {...props} />);
    }
export const SecondaryButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="secondary" size="normal" {...props} />);
    }

export const SecondaryButtonSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="secondary" size="small" {...props} />);
    }

export const SecondaryButtonLarge =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="secondary" size="large" {...props} />);
    }
export const SecondaryButtonXSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="secondary" size="xsmall" {...props} />);
    }


export const SecondaryOutlineButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="secondary" size="normal" {...props} />);
    }

export const SecondaryOutlineButtonSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="secondary" size="small" {...props} />);
    }

export const SecondaryOutlineButtonLarge =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="secondary" size="large" {...props} />);
    }
export const SecondaryOutlineButtonXSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="secondary" size="xsmall" {...props} />);
    }
export const DangerOutlineButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="danger" size="normal" {...props} />);
    }

export const DangerOutlineButtonSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="danger" size="small" {...props} />);
    }
export const DangerOutlineButtonXSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="danger" size="xsmall" {...props} />);
    }
export const DangerOutlineButtonLarge =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<OutlineBtn btnType="danger" size="large" {...props} />);
    }
export const DangerButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="danger" size="normal" {...props} />);
    }

export const DangerButtonSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="danger" size="small" {...props} />);
    }
export const DangerButtonXSmall =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="danger" size="xsmall" {...props} />);
    }
export const DangerButtonLarge =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<BootstrapBtn btnType="danger" size="large" {...props} />);
    }
   
  