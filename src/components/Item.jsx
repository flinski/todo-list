import styles from "./Item.module.scss";

export default function Item({ item, onDeleteItem }) {
	return (
		<li className={styles.item}>
			<input
				className={`${styles.input} ${item.checked ? "checked" : ""}`}
				type="text"
				disabled={true}
				value={item.title}
			/>
			<button className={styles.btnEdit} type="button">
				Edit
			</button>
			<button className={styles.btnDelete} type="button" onClick={() => onDeleteItem(item.id)}>
				Delete
			</button>
		</li>
	);
}
