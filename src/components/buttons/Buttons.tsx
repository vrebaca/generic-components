export const PrimaryButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<button className="btn btn-primary" style={{ backgroundColor: 'var(--fiskaltrust)', borderColor: 'var(--fiskaltrust)' }} {...props} />);
    }

export const PrimaryOutlineButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<button className="btn btn-outline-primary" style={{ color: 'var(--fiskaltrust)', borderColor: 'var(--fiskaltrust)' }} {...props} />);
    }

export const SecondaryButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<button className="btn btn-secondary" {...props} />);
    }

export const SecondaryOutlineButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<button className="btn btn-outline-secondary" {...props} />);
    }
export const DangerButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<button className="btn btn-danger" {...props} />);
    }
export const DangerOutlineButton =
    (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
        return (<button className="btn btn-outline-danger" {...props} />);
    }