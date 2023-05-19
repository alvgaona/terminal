import { VsClose as CloseIcon } from "solid-icons/vs";

type Props = {
  children: any;
};

const Tab = ({ children }: Props) => {
  return (
    <div class="flex gap-2 p-2 items-center">
      {children}
      <button class="text-transparent hover:text-[var(--text-warp)]" type="button" onClick={() => console.log("Close tab")}>
        <CloseIcon class="h-4 w-4" />
      </button>
    </div>
  );
};

export default Tab;
