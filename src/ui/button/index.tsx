import styles from './styles.module.pcss';
import classnames from "../../utils/classnames.tsx";

type ButtonProps = {
    theme?: 'primary' | 'secondary'
    variant?: 'contained' | 'outlined' | 'link'
    icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export default function Button({children, theme = 'primary', variant = 'contained', ...props}: ButtonProps) {
    return (
        <button {...props} className={classnames(styles.button, styles[`button__${theme}__${variant}`])}>
            {children}
        </button>
    )
}