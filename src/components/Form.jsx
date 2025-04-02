// styles
import styles from "./Form.module.scss";

export default function Form() {
	return (
		<form className={styles.form}>
			<input className={styles.input} type="text" placeholder="Add a task..." />
			<button className={styles.btn}>Add</button>
		</form>
	);
}
