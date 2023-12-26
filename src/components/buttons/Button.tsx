import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { generateButtonClasses } from '@/components/buttons/util';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type Props = Readonly<
    ButtonProps & {
        variant?: 'primary' | 'secondary' | 'black' | 'red';
        size?: 'sm' | 'lg';
        grow?: boolean;
    }
>;

export default function Button({ variant, size, grow, ...props }: Props) {
    const classes = generateButtonClasses({ variant, size, grow, className: props.className });

    return (
        <button {...props} className={classes}>
            {props.children}
        </button>
    );
}
