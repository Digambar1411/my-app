import React from "react";
import "./IndivisualChatBox.css";

function IndivisualChatBox({ chatuser, setIndivisualChatBox, setExpanded }) {
	return (
		<div className="indivisual-chatbox">
			<div
				className="chatbox"
				onClick={() => {
					setIndivisualChatBox(false);
					setExpanded(false);
				}}
			>
				<img
					className="user-profile-pic-vsm"
					src={`${chatuser.profilepicture}`}
					alt="user-profile-pic"
				/>
				<p>{chatuser.name}</p>

				<div className="last-child flex-center">
					<span className="material-icons-outlined">keyboard_arrow_down</span>
					<span className="material-icons-outlined fs-16">close</span>
				</div>
			</div>

			<section className="chats-container">
				<div className="chat right-chat">hey john how are you</div>
				<div className="chat">Hey i am fine and good.</div>
				<div className="chat right-chat">great</div>
				<div className="chat">How are you ? </div>
				<div className="chat right-chat">I am good too</div>
			</section>
			<div className="input-section flex-center">
				<input input="text" />
				<span className="material-icons-outlined fs-17 extra-bold light-blue flex-center">
					keyboard_arrow_right
				</span>
			</div>
		</div>
	);
}

export { IndivisualChatBox };
