import Window from "./Window";
import Header from "./Header";
import { createEffect, createSignal, For } from "solid-js";
import Hashids from "hashids";

const App = () => {
  const hashids = new Hashids();
  const generateWindowId = () => hashids.encode(Math.floor(Math.random() * 2 ** 16));
  
  const [windows, setWindows] = createSignal<Map<string, boolean>>(new Map());
  
  {() => windows().set(generateWindowId(), true)}

  const addWindow = () => {
    setWindows((windows) => {
      for (const key of windows.keys()) {
        windows.set(key, false);
      }
      
      windows.set(generateWindowId(), true);

      return new Map(windows);
    });
  }

  const activateWindow = (id: string) => {
    console.log(id)
  }

  return (
  <>
    <Header addWindow={addWindow} activateWindow={activateWindow}/>
    <main class="w-full h-full m-auto">
      <For each={Array.from(windows())}>
      {
        (window) => <Window id={window[0]} active={window[1]}/>
      }
      </For>
    </main>
  </>
  );
};

export default App;
