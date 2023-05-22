import Pane from "./Pane";
import { PaneProvider } from "./Pane";

type Props = {
  id: string;
  active: boolean;
}

const Window = (props: Props) => {
  const { id, active } = props;

  return (active ? <div class="h-full w-full pb-6 flex flex-col justify-end">
    <PaneProvider>
      <Pane/>
    </PaneProvider>
  </div> : null);
};

export default Window;
