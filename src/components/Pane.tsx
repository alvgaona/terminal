import { createContext, createSignal, useContext, For } from "solid-js";
import ResultBlock from "./ResultBlock";
import Block from "./Block";
import { commands, Command } from "../lib/commands";

const PaneContext = createContext<any>([]);

export const PaneProvider = (props: any) => {
  const [results, setResults] = createSignal<Command[]>([]);
  
  const findCommand = (commandName: string) => {
    try {
      return [...results(), commands.get(commandName)];
    } catch (e: unknown) {
      return [...results(), new Command(commandName, `ash: command not found: ${commandName}`, true)]
    }
  }
  
  const run = (commandName: string): void => {
    if (commandName == "clear") {
      setResults([])
      return;
    }

    setResults(findCommand(commandName))
  };

  return (
    <PaneContext.Provider value={[results, { run }]}>
      {props.children}
    </PaneContext.Provider>
  );
};

export const usePane = (): any => useContext<Command[]>(PaneContext);

const Pane = () => {
  const [results] = usePane();

  return (
    <>
      <For each={results()}>
        {(result) => (
          <ResultBlock error={result.error} command={result.name}>
            {result.output}
          </ResultBlock>
        )}
      </For>
      <Block />
    </>
  );
};

export default Pane;
