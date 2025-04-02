import styles from "./Item.module.scss";

export default function Item() {
	return (
		<li className={styles.item}>
			<input className={styles.input} type="text" disabled={true} value="lorem ipsum" />
			<button className={styles.btnEdit}>Edit</button>
			<button className={styles.btnDelete}>Delete</button>
		</li>
	);
}
