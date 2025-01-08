export function interpret(ast, env) {
  switch (ast.type) {
    case "Num":
      return interpretNum(ast, env);
    case "Ident":
      return interpretIdent(ast, env);
    case "CallExpr":
      return interpretCallExpr(ast, env);
    default:
      throw new Error(`Unknown AST type: ${ast.type}`);
  }
}

function interpretNum(ast, _env) {
  return ast.value;
}

function interpretIdent(ast, env) {
  return env[ast.name];
}

function interpretCallExpr(ast, env) {
  const func = interpret(ast.callee, env);
  const args = ast.args.map((arg) => interpret(arg, env));
  const value = func(...args);
  return value;
}
