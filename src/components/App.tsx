import Pane, { PaneProvider } from "./Pane";
import Window from "./Window";
import Header from "./Header";
import { createSignal } from "solid-js";

const App = () => {
  const [windows, setWindows] = createSignal(new Set());

  const addWindow = (name: string) => setWindows(windows().add({ id: 0, name }))

  return (
  <>
    <Header/>
    <main class="w-full h-full m-auto">
      <Window/>
    </main>
  </>
  );
};

export default App;
