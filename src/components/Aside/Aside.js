import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./Aside.css";

function Aside() {
	const list = ["Profile", "Post", "Gallery", "ToDo"];
	const { id } = useParams();

	const getClass = ({ isActive }) => {
		return isActive ? "item active-link" : "item";
	};

	return (
		<div className="aside">
			{list.map((item) => {
				return (
					<NavLink
						to={`/screen/${id}/${item.toLowerCase()}`}
						className={getClass}
						key={item}
					>
						{item}
					</NavLink>
				);
			})}
		</div>
	);
}

export { Aside };
