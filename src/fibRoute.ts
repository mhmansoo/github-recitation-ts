// src/fibRoute.ts
import fibonacci from "./fib";

// Minimal, explicit types (no Express dependency needed)
type FibReq = { params: { num?: string } };
type FibRes = {
  status: (code: number) => FibRes;
  send: (body: string) => void;
};

export default function fibRoute(req: FibReq, res: FibRes): void {
  const numParam = req.params.num; // string | undefined (not any)

  if (typeof numParam !== "string") {
    res.status(400).send("Missing route parameter 'num'");
    return;
  }

  const n = Number.parseInt(numParam, 10);
  if (Number.isNaN(n)) {
    res.status(400).send(`Invalid number: "${numParam}"`);
    return;
  }

  const fibN = fibonacci(n); // number
  const result =
    fibN < 0
      ? `fibonacci(${n}) is undefined`
      : `fibonacci(${n}) is ${fibN}`;

  res.send(result);
}
