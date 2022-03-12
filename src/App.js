import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile posts={props.posts}/>}
                        />
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogs={props.dialogs}
                                                 messages={props.messages}/>}
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
                        <Route path="/friends"
                               element={<Friends/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;