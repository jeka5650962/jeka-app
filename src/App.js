import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friendsName={props.friendsName}/>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile profilePage={props.profilePage}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}
                               />}
                        />
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogs={props.dialogsPage.dialogs}
                                                 messages={props.dialogsPage.messages}/>}
                        />
                        <Route path="/news"
                               element={<News/>}
                        />
                        <Route path="/music"
                               element={<Music/>}
                        />
                        <Route path="/settings"
                               element={<Settings/>}
                        />
                        <Route path="/friends/*"
                               element={<Friends friendsName={props.friendsName}/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
