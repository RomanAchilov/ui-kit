/// <reference types="react" />
export interface InputProps {
    className?: string;
    placeholder?: string;
    disabled?: boolean;
    type?: string;
    checked?: boolean;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reset?: () => void;
    error?: boolean;
    ref?: React.Ref<HTMLInputElement>;
}
