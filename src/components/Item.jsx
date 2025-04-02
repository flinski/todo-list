import { useState } from "react";
// styles
import styles from "./Item.module.scss";

export default function Item({ item, onToggleItem, onDeleteItem }) {
	const [isHovered, setIsHovered] = useState(false);

	function handleIsHovered() {
		setIsHovered((curIsHovered) => !curIsHovered);
	}

	return (
		<li className={styles.item} onMouseEnter={handleIsHovered} onMouseLeave={handleIsHovered}>
			<div className={styles.inputWrapper} onClick={() => onToggleItem(item.id)}>
				<input
					className={`${styles.input} ${item.checked ? "checked" : ""}`}
					type="text"
					disabled={true}
					value={item.title}
				/>
			</div>
			{isHovered && (
				<>
					<button className={styles.btnEdit} type="button">
						Edit
					</button>
					<button className={styles.btnDelete} type="button" onClick={() => onDeleteItem(item.id)}>
						Delete
					</button>
				</>
			)}
		</li>
	);
}
