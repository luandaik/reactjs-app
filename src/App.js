import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AllbumFeature from "./features/Allbum";
import Calculator from "./features/Calculator";
import Clock from "./features/Clock";
import Counter from "./features/Counter";
import MagicColor from "./features/MagicColor";
import Post from "./features/Post";
import Student from "./features/Student";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <p> <NavLink to='posts' >Post</NavLink></p>
      <p> <NavLink to='todo' activeClassName="active-menu" >Todo</NavLink></p> */}
      <Switch>
        <Redirect from="/home" to='/'  />
        {/* <Route path="/test" component={TestCodeGym} exact/> */}
        <Route path="/posts" component={Post} exact/>
        <Route path="/student" component={Student} exact/>
        <Route path="/todo" component={TodoFeature} />
        <Route path="/magiccolor" component={MagicColor} />
        <Route path="/counter" component={Counter} />
        <Route path="/clock" component={Clock} />
        <Route path="/allbum" component={AllbumFeature} />
        <Route path="/calculator" component={Calculator} />
      </Switch>

    </div>
  );
}

export default App;
