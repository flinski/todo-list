import { useState } from "react";
// styles
import styles from "./Form.module.scss";

export default function Form({ onAddItem }) {
	const [title, setTitle] = useState("");

	function handleChangeTitle(e) {
		setTitle(e.target.value);
	}

	function handleSubmitForm(e) {
		e.preventDefault();
		if (!title) {
			return;
		}
		const newItem = {
			id: crypto.randomUUID(),
			title: title,
			checked: false,
		};
		onAddItem(newItem);
		setTitle("");
	}

	return (
		<form className={styles.form} onSubmit={handleSubmitForm}>
			<input
				className={styles.input}
				type="text"
				placeholder="Add a task..."
				value={title}
				onChange={handleChangeTitle}
			/>
			<button className={styles.btn}>Add</button>
		</form>
	);
}
