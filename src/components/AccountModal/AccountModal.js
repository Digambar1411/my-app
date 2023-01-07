import React from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../../contexts/userContext";
import "./AccountModal.css";

function AccountModal({ setAccountModal, currentUser }) {
	const navigate = useNavigate();
	const { loggedInUsers, GetSelectedUser} = useUsers();

	const logoutHandler = () => {
		setAccountModal(false);
		navigate("/");
	};

	return (
		<div className="account-box">
			{currentUser.map((user) => {
				return (
					<div key={user.id} className="loggedin-user-section">
						<img
							className="user-profile-pic-md"
							alt="profile-pic"
							src={`${user.profilepicture}`}
						/>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				);
			})}

			{loggedInUsers.map((user) => {
				return (
					<div key={user.id}
						className="other-loggedin-user flex-row flex-center"
						onClick={() =>{
							GetSelectedUser(user.id);
							navigate(`/screen/${user.id}/profile`)}
						}
					>
						<img
							className="user-profile-pic-sm"
							src={`${user.profilepicture}`}
						/>
						<p className="user-name">{user.name}</p>
					</div>
				);
			})}

			<button className="btn-logout" onClick={logoutHandler}>
				Sign out
			</button>
		</div>
	);
}

export { AccountModal };
