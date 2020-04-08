import React, { useContext } from "react";
import StateContext from "../context";

const handleChange = (event, dispatch) => {
	dispatch({
		type: "CHANGE_NAME",
		name: event.target.value,
	});
};

const DemoComponent = () => {
	const [value, dispatch] = useContext(StateContext);
	const { name } = value;
	return (
		<>
			<p>Hey there, mah name is {name} brah</p>
			<form>
				<input
					type="text"
					name="newName"
					placeholder="New Name"
					onChange={(event) => handleChange(event, dispatch)}
				/>
			</form>
		</>
	);
};

export default DemoComponent;
