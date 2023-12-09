type ClassNameProps = (string | boolean | undefined | null)[] | {
    [key: string]: boolean | undefined | null
}[]
export default function classnames(...props: ClassNameProps) {
    if (Array.isArray(props)) {
        return props.filter(Boolean).join(' ')
    }
}