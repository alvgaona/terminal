type Props = {
  children: string;
  error: boolean;
  command: string;
};

const ResultBlock = (props: Props) => {
  const { children, error, command } = props;

  return (
    <div
      tabindex={0}
      class="flex flex-col focus:bg-[#EF80C3] focus:bg-opacity-10 focus:border-2 focus:border-violet-[#EF80C3] text-sm gap-2 border-[#3F4148] border-t px-4 py-4"
    >
      <span class="text-emerald-500 font-black caret-[#EF80C3]">~</span>{" "}
      {error ? (
        <span class="font-bold text-red-600">{command}</span>
      ) : (
        <span class="font-bold text-green-500">{command}</span>
      )}
      <pre>{children}</pre>
    </div>
  );
};

export default ResultBlock;
