// src/fibRoute.ts
import { type Request, type Response } from "express";
import { fib } from "./fib"; // make sure fib.ts has `export function fib(n: number): number`

// Define the expected params shape
type FibParams = { num: string };

export default (req: Request<FibParams>, res: Response) => {
  const { num } = req.params;      // num: string
  const n = parseInt(num, 10);

  // Input validation
  if (isNaN(n) || n < 0) {
    return res.status(400).send(`fibonacci(${num}) is undefined`);
  }

  const fibN = fib(n);             // fib returns number
  const result = `fibonacci(${n}) is ${fibN}`;

  res.send(result);
};

