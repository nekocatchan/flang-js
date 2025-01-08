export function interpret(ast, env) {
  switch (ast.type) {
    case "Ident":
      return interpretIdent(ast, env);
    case "CallExpr":
      return interpretCallExpr(ast, env);
    default:
      throw new Error(`Unknown AST type: ${ast.type}`);
  }
}

function interpretIdent(ast, env) {
  return env[ast.name];
}

function interpretCallExpr(ast, env) {
  const func = interpret(ast.callee, env);
  const value = func();
  return value;
}
