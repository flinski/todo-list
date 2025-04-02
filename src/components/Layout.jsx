// styles
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
	return <div className={styles.layout}>{children}</div>;
}
