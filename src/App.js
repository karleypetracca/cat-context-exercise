import React, { useReducer } from "react";
import { StateProvider } from "./context";
import DemoComponent from "./components/DemoComponent";

import "./App.css";

function App() {
	const initialState = {
		name: "kitty",
		activity: "napping",
	};

	const reducer = (state, action) => {
		const { name, activity } = action;
		switch (action.type) {
			case "CHANGE_NAME":
				return {
					...state,
					name,
					activity: state.activity,
				};
			case "CHANGE_ACTIVITY":
				return {
					...state,
					name: state.name,
					activity,
				};
			default:
				return state;
		}
	};

	return (
		<div className="App">
			<StateProvider value={useReducer(reducer, initialState)}>
				<h1>Cat Reducer</h1>
				<DemoComponent />
			</StateProvider>
		</div>
	);
}

export default App;
