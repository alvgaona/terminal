export class Commands {
  members: Command[];
  constructor(members: Command[]) {
    this.members = members;
  }

  get(name: string): Command {
    const filteredCommands = this.members.filter((m) => m.name == name);

    if (filteredCommands.length != 1) {
      throw Error("Command not found");
    }

    return filteredCommands[0];
  }
}

export class Command {
  name: string;
  output: string;
  error: boolean;

  constructor(name: string, output: string, error: boolean = false) {
    this.name = name;
    this.output = output;
    this.error = error;
  }
}

export const commands = new Commands([
  new Command(
    "help",
    `These are the commands the CLI supports.

cv
show
`
  ),
]);
