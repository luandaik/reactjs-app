import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import AddStudent from "./features/AddStudent";
import AlertCodeGym from "./features/AlertCodeGym";
import AllbumFeature from "./features/Allbum";
import Login from "./features/Auth/components/Login";
import Calculator from "./features/Calculator";
import Clock from "./features/Clock";
import ColorBox from "./features/ClolorBox";
import Counter from "./features/Counter";
import Counter2Feature from "./features/Counter2";
import HiddenInput from "./features/HiddenInput";
import MagicColor from "./features/MagicColor";
import Post from "./features/Post";
import Student from "./features/Student";
import TodoFeature from "./features/Todo";
import TypeInput from "./features/TypeInput";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <p> <NavLink to='posts' >Post</NavLink></p>
      <p> <NavLink to='todo' activeClassName="active-menu" >Todo</NavLink></p> */}
      <Switch>
        <Redirect from="/home" to='/home'  />
        {/* <Route path="/test" component={TestCodeGym} exact/> */}
        <Route path="/posts" component={Post} exact/>
        <Route path="/typeinput" component={TypeInput} exact/>
        <Route path="/student" component={Student} exact/>
        <Route path="/todo" component={TodoFeature} />
        <Route path="/magiccolor" component={MagicColor} />
        <Route path="/counter" component={Counter} />
        <Route path="/clock" component={Clock} />
        <Route path="/allbum" component={AllbumFeature} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/counter2" component={Counter2Feature} />
        <Route path="/alert" component={AlertCodeGym} />
        <Route path="/alert" component={AlertCodeGym} />
        <Route path="/colorbox" component={MagicColor} />
        <Route path="/hidden" component={HiddenInput} />
        <Route path="/typeinput" component={TypeInput} />
        <Route path="/employee" component={Login} />
        <Route path="/counter" component={Counter2Feature} />
        <Route path="/addstudent" component={AddStudent} />

      </Switch>

    </div>
  );
}

export default App;
