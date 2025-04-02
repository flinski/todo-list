import { useState } from "react";
// components
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Item from "./Item";
import Layout from "./Layout";
import List from "./List";

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItem(newItem) {
		setItems((curItems) => [...curItems, newItem]);
	}

	function handleDeleteItem(id) {
		setItems((curItems) => curItems.filter((item) => item.id !== id));
	}

	return (
		<Container>
			<Layout>
				<Header />
				<Form onAddItem={handleAddItem} />
				<List>
					{items.map((item) => (
						<Item key={item.id} item={item} onDeleteItem={handleDeleteItem} />
					))}
				</List>
			</Layout>
		</Container>
	);
}
