import React from "react";
import { Aside, Nav, CommingSoon, Chatbox } from "../../components";

function Gallery() {
	return (
		<>
			<div className="home-page">
				<Aside />
				<div className="right-section">
					<Nav />
					<main className="main-container">
						<CommingSoon />
					</main>
				</div>
			</div>

			<Chatbox />
		</>
	);
}

export { Gallery };
