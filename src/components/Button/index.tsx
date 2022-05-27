import { Container } from "./style"

interface ButtonTypes {
    onClick?:any,
    children: string,
    variant?: 'primary' | 'secondary'
}


export default function Button({onClick, children, variant}:ButtonTypes) {
    return(
        <Container onClick={onClick} variant={variant}>{children}</Container>
    )
}