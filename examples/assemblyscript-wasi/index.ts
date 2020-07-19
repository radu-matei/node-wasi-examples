import { Console, Environ, CommandLine } from "as-wasi";

export function _start(): void {
  let all_vars = new Environ().all();
  all_vars.forEach(function (val) {
    Console.log(val.key + "=" + val.value);
  });

  let cmd = new CommandLine();
  Console.log("Args are: " + cmd.all().toString());
}
