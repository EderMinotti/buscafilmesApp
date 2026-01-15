import styles from "./typograph.module.css"
export const Typograph = ({ variant, children, ...props }) => {
   
    const tags = {
        titulo: "h1",
        subtitulo:"h2",
        paragrafo:"p"
    }

    const Tag = tags[variant]||"p"
   
    return (
        <Tag className={styles.typograph} {...props}>{children}</Tag>
    )
}