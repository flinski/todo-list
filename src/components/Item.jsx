import styles from "./Item.module.scss";

export default function Item({ item }) {
	return (
		<li className={styles.item}>
			<input
				className={`${styles.input} ${item.checked ? "checked" : ""}`}
				type="text"
				disabled={true}
				value={item.title}
			/>
			<button className={styles.btnEdit}>Edit</button>
			<button className={styles.btnDelete}>Delete</button>
		</li>
	);
}
