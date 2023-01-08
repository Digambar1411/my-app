import { createContext, useState, useEffect, useContext} from "react";
import axios from "axios";

const UserContext = createContext();

const useUsers=()=>useContext(UserContext)

const UsersProvider=({children})=>{

    const apiUrl = "https://panorbit.in/api/users.json";

	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser]= useState({})
	const [loggedInUsers, setLoggedInUsers] = useState([])

	const GetSelectedUser =(id)=>{
		setCurrentUser(users.filter(user=>{return user.id==id}))
	};


	useEffect(() => {
		getUsers();
	}, []);

	
	const getUsers = async () => {
		const response = await axios.get(apiUrl);
		console.log(response.data.users);
		setUsers(response.data.users);
		console.log(response.data.users.filter((user,index)=>{return index%4===0}))
		setLoggedInUsers(response.data.users.filter((user,index)=>{return index%4===0}).slice(1))
	};


    return(
        <UserContext.Provider value={{users, GetSelectedUser, currentUser, loggedInUsers}}>
            {children}
        </UserContext.Provider>
    )
}

export { useUsers, UsersProvider}