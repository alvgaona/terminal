import Pane from "./Pane";
import { PaneProvider } from "./Pane";

const Window = () => {
  return <div class="h-full w-full pb-6 flex flex-col justify-end">
    <PaneProvider>
      <Pane/>
    </PaneProvider>
  </div>;
};

export default Window;
