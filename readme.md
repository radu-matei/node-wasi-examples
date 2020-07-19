# WASI examples in NodeJS

To build the Rust examples:

```
$ rustup target add wasm32-wasi
$ cargo build --target wasm32-wasi
```

This will generate the WASI modules in the `target/wasm32-wasi/debug` directory
of each example. Then, change `wasi.js` to use the desired module and arguments.

To build the AssemblyScript examples:

```
$ npm install
$ npm run-script asbuild
```

To transform the `.wat` file into a binary module, use [wat2wasm][wabt] from the
WebAssembly Binary Toolkit:

```
$ wat2wasm wat/hello.wat -o examples/wat/hello.wasm
```

[wabt]: https://github.com/webassembly/wabt
