import React from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//COMPONENTS
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import News from "./components/News/News"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
