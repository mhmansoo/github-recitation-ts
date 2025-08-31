// src/fibRoute.ts
import type { Request, Response } from "express";
import { fibonacci } from "./fib";

export default function fibRoute(req: Request, res: Response): void {
  const numParam: string | undefined = req.params?.num;

  if (typeof numParam !== "string") {
    res.status(400).send("Missing route parameter 'num'");
    return;
  }

  const n = Number.parseInt(numParam, 10);
  if (Number.isNaN(n)) {
    res.status(400).send(`Invalid number: "${numParam}"`);
    return;
  }

  const fibN = fibonacci(n);
  const result =
    fibN < 0
      ? `fibonacci(${n}) is undefined`
      : `fibonacci(${n}) is ${fibN}`;

  res.send(result);
}
