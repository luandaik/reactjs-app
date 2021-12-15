import { Route } from "react-router-dom";
import AllbumFeature from "./features/Allbum";
import Clock from "./features/Clock";
import Counter from "./features/Counter";
import MagicColor from "./features/MagicColor";
import Post from "./features/Post";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      <Route path="/posts" component={Post} />
      <Route path="/todo" component={TodoFeature} />
      <Route path="/magiccolor" component={MagicColor} />
      <Route path="/counter" component={Counter} />
      <Route path="/clock" component={Clock} />
      <Route path="/allbum" component={AllbumFeature} />
    </div>
  );
}

export default App;
