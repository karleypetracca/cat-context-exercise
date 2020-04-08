import React, { useContext } from "react";
import StateContext from "../context";

const DemoComponent = () => {
	const [value, dispatch] = useContext(StateContext);
	const { name, activity } = value;

	const handleChangeName = (event) => {
		dispatch({
			type: "CHANGE_NAME",
			name: event.target.value,
		});
	};

	const handleClickActivity = (event) => {
		dispatch({
			type: "CHANGE_ACTIVITY",
			activity: event.target.value,
		});
	};

	return (
		<>
			<p>
				{name} is {activity}
			</p>
			<form>
				Cat's name:
				<input
					type="text"
					name="newName"
					placeholder="New Name"
					onChange={(event) => handleChangeName(event)}
				/>
			</form>
			<button
				name="napping"
				value="napping"
				onClick={(event) => handleClickActivity(event)}
			>
				Napping
			</button>
			<button
				name="eating"
				value="eating"
				onClick={(event) => handleClickActivity(event)}
			>
				Eating
			</button>
			<button
				name="playing"
				value="playing"
				onClick={(event) => handleClickActivity(event)}
			>
				Playing
			</button>
		</>
	);
};

export default DemoComponent;
