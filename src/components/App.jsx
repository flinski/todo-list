import { useLocalStorage } from "../hooks/useLocalStorage";
// components
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Item from "./Item";
import Layout from "./Layout";
import List from "./List";
import Stats from "./Stats";
import Message from "./Message";

export default function App() {
	const [items, setItems] = useLocalStorage("flinski-todo-list", []);
	const hasItems = items.length !== 0;

	function handleAddItem(newItem) {
		setItems((curItems) => [...curItems, newItem]);
	}

	function handleDeleteItem(id) {
		setItems((curItems) => curItems.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((curItems) => curItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
	}

	function handleEditItem(id, newTitle) {
		setItems((curItems) => curItems.map((item) => (item.id === id ? { ...item, title: newTitle } : item)));
	}

	return (
		<Container>
			<Layout>
				<Header />
				<Form onAddItem={handleAddItem} />
				{hasItems ? (
					<>
						<Stats items={items} />
						<List>
							{items.map((item) => (
								<Item
									key={item.id}
									item={item}
									onToggleItem={handleToggleItem}
									onEditItem={handleEditItem}
									onDeleteItem={handleDeleteItem}
								/>
							))}
						</List>
					</>
				) : (
					<Message />
				)}
			</Layout>
		</Container>
	);
}
