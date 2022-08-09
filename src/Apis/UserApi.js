
import Axios from "axios";

const baseUrl = "https://localhost:7181/api/User";

export function GetUser() {
    
    const loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));
      
    if(loggedUser){
        return loggedUser.user;
    }

    return null;
}

export async function LoginUser(data){

    const response = await Axios.post(`${baseUrl}/Login`,{
        email: data.email,
        password: data.password, 
    })
    .then((res) => {
        localStorage.setItem("LoggedUser", JSON.stringify(res.data));
        window.location.href = "http://localhost:3000/";
    })
    .catch((err) => {
        console.log(err);
    });

}

export async function SignUpUser(data){

    const response = await Axios.post(`${baseUrl}/Register`,{
        name: data.name,
        email: data.email,
        password: data.password, 
    })
    .then((res) => {
        window.location.href = "http://localhost:3000/login";
    })
    .catch((err) => {
        console.log(err);
    });
}

export async function EditUser(data){

    const response = await Axios.put(`${baseUrl}/Edit`, {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
    })
    .then((res) => {
        const loggedUser = JSON.parse(localStorage.getItem("LoggedUser"));
        loggedUser.user.name = data.name;
        loggedUser.user.email = data.email;
        localStorage.setItem("LoggedUser", JSON.stringify(loggedUser));
        window.location.href = "http://localhost:3000/";
    })
    .catch((err) => {
        console.log(err);
    });
}

export async function LogOutUser() {
    
    // log out
}
