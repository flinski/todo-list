// components
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Item from "./Item";
import Layout from "./Layout";
import List from "./List";

export default function App() {
	return (
		<Container>
			<Layout>
				<Header />
				<Form />
				<List>
					<Item />
					<Item />
					<Item />
				</List>
			</Layout>
		</Container>
	);
}
