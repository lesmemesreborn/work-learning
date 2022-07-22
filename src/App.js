import React, { Component } from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { getAuthUserData } from "./redux/authReducer"
import { connect, Provider } from "react-redux"
import { compose } from "redux"
import { initializeApp } from "./redux/appReducer"
import store from "./redux/redux-store"

//COMPONENTS

import Navbar from "./components/Navbar/Navbar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import News from "./components/News/News"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"
import Preloader from "./components/common/Preloader"

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})
export default connect(mapStateToProps, { initializeApp })(App)
