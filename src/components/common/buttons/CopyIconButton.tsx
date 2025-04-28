import { useState } from 'react';
import { Tooltip } from 'antd';
import { IconButton } from './IconButtons';
import { DefaultIcon } from '../icons/Icons';

const CopyIconButton = ({ text, className }: { text: string, className?: string }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 800);
    };

    return (
        <Tooltip title={"Coppied"} placement="top" open={showTooltip}>
            <IconButton className={`${className ?? ""}`} onClick={handleCopy}>
                <DefaultIcon className="fa fa-clone" />
            </IconButton>
        </Tooltip>
    );
};

export default CopyIconButton;