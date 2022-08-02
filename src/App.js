import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import Edit from "./Pages/Edit/Edit";
import Account from "./Pages/Account/Account";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
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

        <Route path="/account" element={
          <Layout>
            <Account />
          </Layout>
        } />

        <Route path="/login" element={
          <Login />
        } />   
        
      </Routes>
    </div>
  );
}

export default App;
