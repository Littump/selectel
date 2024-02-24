import { Link } from 'react-router-dom'
import styles from './Btn.module.scss'
interface Props {
    type?: "tonal" | "outlined" | "text";
    children?: JSX.Element | string;
    onClick?: () => void;
    className?: string;
    to?: string;
    width?: string;
}
const Btn = (props: Props) => {
    const {
        type = "tonal",
        children,
        onClick,
        className,
        to = "",
        width,
    } = props;
    return (
        <Link
            to={to}
            className={`${className} ${styles.btn} ${styles[type]}`}
            onClick={onClick}
            style={{ width: width }}
        >
            {children}
        </Link>
    );
};

export default Btn;
