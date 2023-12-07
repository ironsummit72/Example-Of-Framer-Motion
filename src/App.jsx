
import Foreground from "./components/Foreground";
import Background from "./components/background";

function App() {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      <Background />
      <Foreground/>
    </div>
  );
}

export default App;
