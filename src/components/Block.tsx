import { usePane } from "./Pane";

const Block = () => {
  const [_, { run }] = usePane();

  let textarea: HTMLTextAreaElement;

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key == "Enter" && event.shiftKey == false) {
      event.preventDefault();
      if (textarea.value != "") {
        run(textarea.value);
        textarea.value = "";
      }
    }
  };

  const handleFocus = (): void => {
    textarea.focus();
  };

  return (
    <div
      onClick={handleFocus}
      class="flex flex-col text-sm gap-2 border-[#3F4148] border-t px-4 py-4"
    >
      <span class="text-emerald-500 font-black caret-[#EF80C3]">~</span>
      <textarea
        autofocus
        ref={textarea}
        class="bg-transparent resize-none outline-none"
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default Block;
