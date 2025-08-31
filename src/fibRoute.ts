// src/fibRoute.ts
import fibonacci from "./fib";

type Req = { params: { num?: string } };
type Res = { status: (code: number) => Res; send: (msg: string) => void };

export default function fibRoute(req: Req, res: Res): void {
  const numParam = req.params.num;

  if (!numParam) {
    res.status(400).send("Missing route parameter 'num'");
    return;
  }

  const n = parseInt(numParam, 10);
  if (isNaN(n)) {
    res.status(400).send(`Invalid number: ${numParam}`);
    return;
  }

  const fibN = fibonacci(n);
  const result =
    fibN < 0
      ? `fibonacci(${n}) is undefined`
      : `fibonacci(${n}) is ${fibN}`;

  res.send(result);
}
