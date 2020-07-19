"use strict";

const fs = require("fs");
const { WASI } = require("wasi");
const path = require("path");

// const wasi = new WASI({
//   preopens: {
//     "/sandbox": process.cwd(),
//   },
// });

const wasi = new WASI({
  args: ["arg1", "arg2"],
  env: {
    abc: "def",
    foo: "bar",
  },
});

const importObject = { wasi_snapshot_preview1: wasi.wasiImport };
// const importObject = {};

(async () => {
  const wasm = await WebAssembly.compile(
    fs.readFileSync(
      // "./examples/rust-wasi-readfile/target/wasm32-wasi/debug/rust-wasi-readfile.wasm"
      "./examples/assemblyscript-wasi/build/as-wasi-example.wasm"
    )
  );
  const instance = await WebAssembly.instantiate(wasm, importObject);

  wasi.start(instance);
})();
