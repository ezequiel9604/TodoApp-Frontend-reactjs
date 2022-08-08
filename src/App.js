import { Routes, Route } from "react-router-dom";
import { useState } from "react";
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
import { Tasks, User } from "./DummyData/DummyData";
import { getFilteredTasks } from "./Helpers/Helpers";

function App() {

  const [user] = useState(User);
  const [tasks] = useState(Tasks);
  const [searchTask, setSearchTask] = useState("");
  const [taskToDelete, setTaskToDelete] = useState(-1);
  const [modalWindOpen, setModalWindOpen] = useState(false);

  function handleModalDelete(){ 
    console.log(taskToDelete);
    setModalWindOpen(false);
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
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Daily" tasks={getFilteredTasks(tasks, searchTask, "Daily")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
        } />
    
        <Route path="/daily" element={
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Daily" tasks={getFilteredTasks(tasks, searchTask, "Daily")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
        } />
      
        <Route path="/weekly" element={
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Weekly" tasks={getFilteredTasks(tasks, searchTask, "Weekly")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
        } />
        
        <Route path="/monthly" element={
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Home user={user} frequency="Monthly" tasks={getFilteredTasks(tasks, searchTask, "Monthly")} />
              { modalWindOpen && <Modal /> }
            </Layout>
          </AppContext.Provider>
        } />
        
        <Route path="/add" element={
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Add />
            </Layout>
          </AppContext.Provider>
        } /> 

        <Route path="/edit" element={
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Edit tasks={tasks} />
            </Layout>
          </AppContext.Provider>
        } /> 

        <Route path="/editaccount" element={
          <AppContext.Provider value={AppContextValue}>
            <Layout>
              <Account user={user}  />
            </Layout>
          </AppContext.Provider>
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
