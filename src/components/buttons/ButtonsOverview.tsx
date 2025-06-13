import React from 'react';
import { DangerButton, DangerOutlineButton, PrimaryButton, PrimaryOutlineButton, SecondaryButton, SecondaryOutlineButton } from '../../packages/buttons/Buttons';

const ButtonsOverview: React.FC = () => {
    return (
        <div id="#buttons">
            &nbsp;
            <PrimaryButton type="button">Button</PrimaryButton>
            &nbsp;
            <PrimaryOutlineButton type="button">Button</PrimaryOutlineButton>
            &nbsp;
            <SecondaryButton type="button">Button</SecondaryButton>
            &nbsp;
            <SecondaryOutlineButton type="button">Button</SecondaryOutlineButton>
            &nbsp;
            <DangerButton type="button">Button</DangerButton>
            &nbsp;
            <DangerOutlineButton type="button">Button</DangerOutlineButton>
        </div>
    );
};

export default ButtonsOverview;