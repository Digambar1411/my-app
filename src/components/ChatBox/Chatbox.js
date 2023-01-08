import React, { useState } from "react";
import { ExpandedChatBox } from "../ExpandedChatBox/ExpandedChatBox";
import "./Chatbox.css";

function Chatbox() {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			className={` ${
				expanded ? "expanded-chatbox-position" : "chatbox-position"
			}`}
		>
			<div className="chatbox" onClick={() => setExpanded(!expanded)}>
				<span className="material-icons-outlined">mode_comment</span>
				<div>Chats</div>
				<span className="material-icons-outlined">keyboard_arrow_up</span>
			</div>
			{expanded ? <ExpandedChatBox setExpanded={setExpanded} /> : ""}
		</div>
	);
}

export { Chatbox };
