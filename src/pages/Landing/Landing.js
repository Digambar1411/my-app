import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../contexts/userContext";
import "./Landing.css";

function Landing() {
	const { users, GetSelectedUser } = useUsers();
	const navigate = useNavigate();

	return (
		<div className="landing-page">
			<div className="top-section"></div>
			<div className="container">
				<div className="container-heading">Select an account</div>
				<div className="users-container">
					{users.map((user) => {
						return (
							<div
								className="user-div"
								onClick={() => {
									GetSelectedUser(user.id);
									navigate(`/screen/${user.id}/profile`);
								}}
								key={user.id}
							>
								<img
									className="user-profile-pic-sm"
									src={`${user.profilepicture}`}
								/>
								<span>{user.name}</span>
							</div>
						);
					})}
				</div>
				<div className="footer"></div>
			</div>
		</div>
	);
}

export { Landing };
