import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Daily from "./Pages/Frequency/Daily";
import Weekly from "./Pages/Frequency/Weekly";
import Monthly from "./Pages/Frequency/Monthly";
import Add from "./Pages/Add/Add";
import Edit from "./Pages/Edit/Edit";
import Account from "./Pages/Account/Account";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Forgot from "./Pages/Forgot/Forgot";
import Restore from "./Pages/Restore/Restore";
import Update from "./Pages/Update/Update";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home frequency="daily" >
              <Daily />
            </Home>
          </Layout>
        } />

        <Route path="/daliy" element={
          <Layout>
            <Home frequency="daily" >
              <Daily />
            </Home>
          </Layout>
        } />

        <Route path="/weekly" element={
          <Layout>
            <Home frequency="weekly" >
              <Weekly />
            </Home>
          </Layout>
        } />

        <Route path="/monthly" element={
          <Layout>
            <Home frequency="monthly" >
              <Monthly />
            </Home>
          </Layout>
        } />
          
        <Route path="/add" element={
          <Layout>
            <Add />
          </Layout>
        } /> 

        <Route path="/edit" element={
          <Layout>
            <Edit />
          </Layout>
        } /> 

        <Route path="/editaccount" element={
          <Layout>
            <Account />
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
