# fibs-hello-world

A minimal fibs example.

## How to build and run

First, install Deno: https://docs.deno.com/runtime/manual/getting_started/installation

Next, clone, build and run like this:

```
git clone https://github.com/floooh/fibs-hello-world
cd fibs-test
./fibs build
./fibs list targets --exe
./fibs run hello
```

If anything goes wrong run `./fibs diag tools` and follow the instructions.

To build and run for WASI, install the optional WASI SDK first:

```
./fibs wasisdk install
./fibs config wasi-make-debug
./fibs build
./fibs list targets --exe
./fibs run hello
```