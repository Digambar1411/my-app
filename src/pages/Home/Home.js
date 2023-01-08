import React from "react";
import "./Home.css";
import { Aside, Nav, Address, Chatbox } from "../../components";
import { useUsers } from "../../contexts/userContext";

function Home() {
	const { currentUser } = useUsers();

	return (
		<>
			<div className="home-page">
				<Aside />
				<div className="right-section">
					<Nav />
					<div className="main-container">
						{currentUser.map((user) => {
							return (
								<div key={user.id} className="main-left">
									<img
										className="profile-pic-large"
										src={user.profilepicture}
										alt="user-profile-pic"
									/>
									<strong className="user-name center">{user.name}</strong>
									<div>
										<span>Username</span> : <strong> {user.username}</strong>
									</div>
									<div>
										<span>e-mail</span> : <strong>{user.email}</strong>
									</div>
									<div>
										<span>Phone</span> :{" "}
										<strong>
											{user.phone.split(" ")[0].split("-").join("")}
										</strong>
									</div>
									<div>
										<span>Website</span> : <strong>{user.website}</strong>
									</div>
									<span className="center company">Company</span>
									<div>
										<span>Name</span> : <strong>{user.company.name}</strong>
									</div>
									<div>
										<span>catchphrase</span> :{" "}
										<strong>{user.company.catchPhrase}</strong>
									</div>
									<div>
										<span>bs </span> : <strong>{user.company.bs}</strong>
									</div>
								</div>
							);
						})}

						<div className="main-right">
							<Address selectedUser={currentUser} />
						</div>
					</div>
				</div>
			</div>
			<Chatbox />
		</>
	);
}

export { Home };
