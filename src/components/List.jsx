import styles from "./List.module.scss";

export default function List({ children }) {
	return <ul className={styles.list}>{children}</ul>;
}
