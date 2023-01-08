import React, {  useState } from "react";
import "./Nav.css";
import { useUsers } from "../../contexts/userContext";
import { useLocation } from "react-router-dom";
import { AccountModal } from "../AccountModal/AccountModal";

function Nav() {
	const { currentUser} = useUsers();
	const { pathname } = useLocation();
	const [accountModal, setAccountModal] = useState(false);

	const showAccountModal = () => {
		setAccountModal(true);
	};

	return (
		<div className="nav">
			<span className="page-title"> {pathname.toString().split("/")[3]}</span>
			{currentUser.map((user) => {
				return (
					<div
						key={user.id}
						className="flex-row flex-center user-account"
						onClick={showAccountModal}
					>
						<img
							className="user-profile-pic-sm"
							src={`${user.profilepicture}`}
							alt="small-profile-icon"
						/>
						<p className="user-name">{user.name}</p>
					</div>
				);
			})}
			{accountModal && (
				<AccountModal
					setAccountModal={setAccountModal}
					currentUser={currentUser}
				/>
			)}
		</div>
	);
}

export { Nav };
