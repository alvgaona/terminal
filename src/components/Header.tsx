import { AiOutlinePlus as PlusIcon } from "solid-icons/ai";
import Tab from "./Tab";
import { createStore, produce } from "solid-js/store";
import { For, createEffect, createRenderEffect, createSignal } from "solid-js";

type TabData = {
  id: number;
  name: string;
};

const Header = () => {
  const [tabs, setTabs] = createStore<TabData[]>([{ id: 0, name: "ash" }]);
  const [numTabs, setNumTabs] = createSignal<number>(0);

  const onAddTab = () => {
    let count = numTabs() + 1;
    setNumTabs(count);
    setTabs(
      produce((tabs) => {
        tabs.push({ id: count, name: "ash" });
      })
    );
  };

  return (
    <nav class="px-6 py-1 text-xs border-b border-slate-500">
      <div class="flex gap-2 items-center">
        <div class="flex gap-2">
          <For each={tabs}>
            {(tab) => {
              const { name } = tab;
              return <Tab>{name}</Tab>;
            }}
          </For>
        </div>
        <button type="button" onClick={onAddTab}>
          <PlusIcon class="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
