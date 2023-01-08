import React, { useState } from "react";
import "./ExpandedChatBox.css";
import { useUsers } from "../../contexts/userContext";
import { IndivisualChatBox } from "../IndivisulChatBox/IndivisualChatBox";

function ExpandedChatBox({ setExpanded }) {
	const { users } = useUsers();

	const [indivisualChatBox, setIndivisualChatBox] = useState(false);
	const [chatuser, setChatuser] = useState([]);

	return (
		<>
			<section className="chatbox-users-container">
				{users.map((user) => {
					return (
						<div
							key={user.key}
							className="flex-row flex-center user-account chatbox-user"
							onClick={() => {
								setChatuser(user);
								setIndivisualChatBox(true);
							}}
						>
							<img
								className="user-profile-pic-vsm"
								src={`${user.profilepicture}`}
								alt="user-profile-pic"
							/>
							<p>{user.name}</p>
							<span
								className={`status ${user.id % 3 === 0 ? "offline" : "online"}`}
							></span>
						</div>
					);
				})}
			</section>
			{indivisualChatBox && (
				<IndivisualChatBox
					chatuser={chatuser}
					setIndivisualChatBox={setIndivisualChatBox}
					setExpanded={setExpanded}
				/>
			)}
		</>
	);
}

export { ExpandedChatBox };
