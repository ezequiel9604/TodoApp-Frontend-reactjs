import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import Edit from "./Pages/Edit/Edit";
import Account from "./Pages/Account/Account";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Forgot from "./Pages/Forgot/Forgot";
import Restore from "./Pages/Restore/Restore";
import Update from "./Pages/Update/Update";
import Modal from "./Layout/Modal/Modal";
import { AppContext } from "./context/Context";
import { getFilteredTasks } from "./Helpers/Helpers";
import { GetUser } from "./Apis/UserApi";
import { GetTaskByUserId, DeleteTask } from "./Apis/TaskApi";

function App() {

  const [user] = useState(GetUser());
  const [tasks, setTasks] = useState([]);
  const [searchTask, setSearchTask] = useState("");
  const [taskToDelete, setTaskToDelete] = useState(0);
  const [modalWindOpen, setModalWindOpen] = useState(false);

  useEffect(() => {
    async function fetchData(){
      if(user){
        setTasks(await GetTaskByUserId(user.id))
      }
    }

    fetchData();

  }, []);

  async function handleModalDelete(){ 
    setModalWindOpen(false);
    
    await DeleteTask({ id: taskToDelete});
  }

  function handleModalOpen(taskid){
    setTaskToDelete(taskid);
    setModalWindOpen(true);
  }

  function handleModalClose(){
    setModalWindOpen(false);
  }

  function handleSearchTask(value){
    setSearchTask(value);
  }

  const AppContextValue = {
    handleModalOpen,
    handleModalClose,
    handleModalDelete,
    handleSearchTask,
  }

  return (
    <div className="App">
      <Routes>  

        <Route path="/" element={
          <Navigate to="/daily" />
        } />
    
        <Route path="/daily" element={
          user? 
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Daily" tasks={getFilteredTasks(tasks, searchTask, "Daily")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
          :
          <Navigate to="/login" />
        } />
      
        <Route path="/weekly" element={
          user? 
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Weekly" tasks={getFilteredTasks(tasks, searchTask, "Weekly")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
          :
          <Navigate to="/login" />
        } />
        
        <Route path="/monthly" element={
          user?
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Monthly" tasks={getFilteredTasks(tasks, searchTask, "Monthly")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
          :
          <Navigate to="/login" />
        } />
        
        <Route path="/add" element={
          user?
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Add user={user} />
            </Layout>
          </AppContext.Provider>
          :
          <Navigate to="/login" />
        } /> 

        <Route path="/edit" element={
          user?
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Edit user={user} tasks={tasks} />
            </Layout>
          </AppContext.Provider>
          :
          <Navigate to="/login" />
        } /> 

        <Route path="/editaccount" element={
          user?
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Account user={user}  />
            </Layout>
          </AppContext.Provider>
          :
          <Navigate to="/login" />
        } />

        <Route path="/login" element={
          <Login />
        } /> 

        <Route path="/register" element={
          <Register />
        } />  

        <Route path="/forgotpassword" element={
          <Forgot />
        } />  

        <Route path="/restorepassword" element={
          <Restore />
        } /> 

        <Route path="/updatedpassword" element={
          <Update />
        } /> 

      </Routes>
    </div>
  );
}

export default App;
