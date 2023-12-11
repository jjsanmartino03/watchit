import classnames from "@utils/classnames.tsx";
import styles from './styles.module.pcss';

export default function Loader({
                                   className
                               }: {
    className?: string
}) {
    return <div className={classnames(styles.loader, className)}>
        <div className={styles.loader__animation}></div>
    </div>
}