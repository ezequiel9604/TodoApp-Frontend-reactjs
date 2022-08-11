
import Axios from "axios";

const baseUrl = "https://localhost:7181/api/Task";

export async function GetTaskByUserId(id){

    const token = JSON.parse(localStorage.getItem("LoggedUser")).token;

    const response = await Axios.get(`${baseUrl}/GetByUserId/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer "+ token
        }
    });

    return response.data;
}

export async function CreateTask(data){

    const token = JSON.parse(localStorage.getItem("LoggedUser")).token;

    const response = await Axios.post(`${baseUrl}/Add`,{
        description: data.description,
        category: data.category,
        frequency: data.frequency,
        hour: data.hours,
        minute: data.minutes,
        day: data.day,
        month: data.month,
        year: data.year,
        userId: data.userId
    }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer "+ token
        }
    })
    .then((res) => {
        const freq = data.frequency.toLowerCase();
        window.location.href = `http://localhost:3000/${freq}`;
    })
    .catch((err) => {
        return err.response;
    });

    return response;
}

export async function EditTask(data){

    const token = JSON.parse(localStorage.getItem("LoggedUser")).token;

    const response = await Axios.put(`${baseUrl}/Edit`, {
        id: data.id,
        description: data.description,
        frequency: data.frequency,
        category: data.category,
        hour: data.hours,
        minute: data.minutes,
        year: data.year,
        month: data.month,
        day: data.day
    }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer "+ token
        }
    })
    .then((res) => {
        const freq = data.frequency.toLowerCase();
        window.location.href = `http://localhost:3000/${freq}`;
    })
    .catch((err) => {
        return err.response;
    });

    return response;

}

export async function DeleteTask(data){

    const token = JSON.parse(localStorage.getItem("LoggedUser")).token;

    const response = await Axios.post(`${baseUrl}/Delete`, {
        id: data.id
    }, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: "Bearer "+ token
        }
    })
    .then((res) => {
        window.location.href = `http://localhost:3000`;
    })
    .catch((err) => {
        console.log(err);
    });
}


export function GetSelectedTask(tasks, id) {
    
    let selectedTask;
    tasks.forEach((current)=>{
        if(current.id === id)
            selectedTask = current;
    });

    return selectedTask;
}


