import styles from './styles.module.pcss'
import classnames from "@/utils/classnames.tsx";

type InputProps = {
    error?: boolean;
    value: string;
    onChange: (value: string) => void;
    variant?: 'filled' | 'outlined'
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
export default function Input({value, onChange, error, variant = 'filled', className,...props}: InputProps) {


    return <div className={classnames(styles.container, styles[`container_${variant}`])}>
        <input value={value} {...props}
               onChange={(e) => onChange(e.target.value)}
               className={classnames(styles.input)}/>
    </div>
}