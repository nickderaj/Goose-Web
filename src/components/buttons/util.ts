export type ButtonVariants = 'primary' | 'secondary' | 'black' | 'red';
export type ButtonSizes = 'sm' | 'lg';

export const generateButtonClasses = ({
    variant = 'primary',
    size = 'sm',
    className = '',
    grow = false,
}: {
    variant?: ButtonVariants;
    size?: ButtonSizes;
    className?: string;
    grow?: boolean;
}) => {
    const buttonClasses = () => {
        const commonClasses =
            'border hover:shadow-md text-center rounded-xl duration-300 transition-all';

        if (variant === 'primary')
            return `bg-orange-400 text-white hover:brightness-105 border-orange-400 
          disabled:bg-neutral-500 disabled:border-neutral-500 
          ${commonClasses} ${className ?? ''}`;
        if (variant === 'secondary')
            return `border-orange-400 text-orange-400 disabled:border-neutral-500
          disabled:text-neutral-500 ${commonClasses} ${className ?? ''}`;
        if (variant === 'black')
            return `bg-black text-white hover:brightness-125 border-black 
          disabled:bg-neutral-500 disabled:border-neutral-500 
          ${commonClasses} ${className ?? ''}`;
        if (variant === 'red')
            return `bg-rose-500 text-white hover:brightness-125 border-rose-500 
          disabled:bg-neutral-500 disabled:border-neutral-500 
          ${commonClasses} ${className ?? ''}`;
        return '';
    };

    const sizeClasses = () => {
        if (size === 'sm') return 'px-4 py-1';
        if (size === 'lg') return 'text-lg px-8 py-2';
        return '';
    };

    return `${buttonClasses()} ${sizeClasses()} ${grow ? 'w-full' : ''}`;
};
