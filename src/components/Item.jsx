import styles from "./Item.module.scss";

export default function Item({ item, onToggleItem, onDeleteItem }) {
	return (
		<li className={styles.item}>
			<div className={styles.inputWrapper} onClick={() => onToggleItem(item.id)}>
				<input
					className={`${styles.input} ${item.checked ? "checked" : ""}`}
					type="text"
					disabled={true}
					value={item.title}
				/>
			</div>
			<button className={styles.btnEdit} type="button">
				Edit
			</button>
			<button className={styles.btnDelete} type="button" onClick={() => onDeleteItem(item.id)}>
				Delete
			</button>
		</li>
	);
}
