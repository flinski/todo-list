// styles
import styles from "./Stats.module.scss";

export default function Stats({ items }) {
	const numItems = items.length;
	const numCompleted = items.filter((item) => item.checked).length;

	return (
		<div className={styles.stats}>
			Completed {numCompleted}/{numItems}
		</div>
	);
}
