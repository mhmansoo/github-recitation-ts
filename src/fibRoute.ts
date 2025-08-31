// src/fibRoute.ts
import { Request, Response } from "express";
import { fib } from "./fib";

// Expected route params: /fib/:num
type FibParams = { num: string };

export default function fibRoute(req: Request<FibParams>, res: Response): void {
  const numParam = req.params?.num;    // string from URL

  if (typeof numParam !== "string") {
    res.status(400).send("Missing route parameter 'num'");
    return;
  }

  const n = Number.parseInt(numParam, 10);
  if (Number.isNaN(n) || n < 0) {
    res.status(400).send(`Invalid number: "${numParam}"`);
    return;
  }

  const fibN = fib(n);                 // fib: (number) => number
  res.send(`fibonacci(${n}) is ${fibN}`);
}

