import styles from "./Block.module.scss";
interface Props {
    children?: JSX.Element | string;
    className?: string;
}
const Block = (props: Props) => {
    const { children, className } = props;
    return <div className={`${styles.block} ${className}`}>{children}</div>;
};

export default Block;
