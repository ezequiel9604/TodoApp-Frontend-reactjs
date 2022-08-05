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

function App() {

  const [user, setUser] = useState(User);
  const [tasks, SetTasks] = useState(Tasks);
  const [modalWindOpen, setModalWindOpen] = useState(false);

  function getFilteredTasks(frequency){
    const arrs = [...tasks].filter((value)=>{
      return value.frequency === frequency;
    });
    return arrs;
  }

  function handleModalDelete(){
    console.log("sample deleted!");
    setModalWindOpen(false);
  }

  const AppContextValue = {
    setModalWindOpen,
    handleModalDelete
  }

  return (
    <div className="App">
      <Routes>
        
          <Route path="/" element={
            <AppContext.Provider value={AppContextValue}>
              <Layout>
                <Home user={user} tasks={getFilteredTasks("Daily")} />
                { modalWindOpen && <Modal /> }
              </Layout>
            </AppContext.Provider>
          } />
      
          <Route path="/daily" element={
            <AppContext.Provider value={AppContextValue}>
              <Layout>
                <Home user={user} tasks={getFilteredTasks("Daily")} />
                { modalWindOpen && <Modal /> }
              </Layout>
            </AppContext.Provider>
          } />
        
          <Route path="/weekly" element={
            <AppContext.Provider value={AppContextValue}>
              <Layout>
                <Home user={user} tasks={getFilteredTasks("Weekly")} />
                { modalWindOpen && <Modal /> }
              </Layout>
            </AppContext.Provider>
          } />
        
          <Route path="/monthly" element={
            <AppContext.Provider value={AppContextValue}>
              <Layout>
                <Home user={user} tasks={getFilteredTasks("Monthly")} />
                { modalWindOpen && <Modal /> }
              </Layout>
            </AppContext.Provider>
          } />
        
        <Route path="/add" element={
          <Layout>
            <Add />
          </Layout>
        } /> 

        <Route path="/edit" element={
          <Layout>
            <Edit tasks={tasks} />
          </Layout>
        } /> 

        <Route path="/editaccount" element={
          <Layout>
            <Account user={user}  />
          </Layout>
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
