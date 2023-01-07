import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing, Home, Todo, Posts, Gallery } from "./pages";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/screen/:id/profile" element={<Home />} />
				<Route path="/screen/:id/gallery" element={<Gallery />} />
				<Route path="/screen/:id/post" element={<Posts />} />
				<Route path="/screen/:id/todo" element={<Todo />} />
			</Routes>
		</div>
	);
}

export default App;
