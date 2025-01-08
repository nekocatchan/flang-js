import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import { interpret } from "./interpreter.js";

Deno.test("定数関数の呼び出し", () => {
  const ast = {
    type: "CallExpr",
    callee: {
      type: "Ident",
      name: "const42",
    },
    args: [],
  };
  const env = {
    "const42": () => 42,
  };

  assertEquals(interpret(ast, env), 42);
});
