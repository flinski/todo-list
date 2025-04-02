import { useState } from "react";
// styles
import styles from "./Item.module.scss";

export default function Item({ item, onToggleItem, onEditItem, onDeleteItem }) {
	const [title, setTitle] = useState(item.title);
	const [disabled, setDisabled] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	function handleChangeTitle(e) {
		setTitle(e.target.value);
	}

	function handleEdit() {
		setDisabled((curDisabled) => !curDisabled);
	}

	function handleSave() {
		setDisabled((curDisabled) => !curDisabled);
		onEditItem(item.id, title);
	}

	function handleIsHovered() {
		setIsHovered((curIsHovered) => !curIsHovered);
	}

	function handleToggleItem() {
		if (disabled) {
			onToggleItem(item.id);
		}
	}

	return (
		<li className={styles.item} onMouseEnter={handleIsHovered} onMouseLeave={handleIsHovered}>
			<div className={styles.inputWrapper} onClick={handleToggleItem}>
				<input
					className={`${styles.input} ${item.checked ? "checked" : ""}`}
					type="text"
					disabled={disabled}
					value={title}
					onChange={handleChangeTitle}
				/>
			</div>
			{isHovered && (
				<>
					{disabled ? (
						<button className={styles.btnEdit} type="button" onClick={handleEdit}>
							Edit
						</button>
					) : (
						<button className={styles.btnEdit} type="button" onClick={handleSave}>
							Save
						</button>
					)}
					<button className={styles.btnDelete} type="button" onClick={() => onDeleteItem(item.id)}>
						Delete
					</button>
				</>
			)}
		</li>
	);
}
