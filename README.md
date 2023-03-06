# fibs-hello-world

> NOTE: this stuff is all work in progress and will break frequently!

The mininal [fibs](https://github.com/floooh/fibs) hello-world project.

To try this out, first [install Deno](https://deno.land/manual@v1.31.1/getting_started/installation), then install the fibs main script as Deno tool:

```bash
deno install --allow-all https://raw.githubusercontent.com/floooh/fibs/main/fibs.ts
```

If not happened yet, you'll also need to add a directory to your PATH environment variable (see the output of ```deno install``` for details).

Eventually, I'll try to come up with a more convenient process for this initial setup process.

...if you don't trust fibs, you can remove all the ```--allow-all``` arg, Deno will then ask for individual permissions.

Then to build and run, from within the ```fips-hello-world``` root directory:

```bash
> fibs build
...
> fibs run hello
Hello World!
```

The following two commands are probably the most 'enlightening' to get an idea about the fibs project:

```
> fibs help
...
> fibs diag project
...
```
