// src/fibRoute.ts
import { Request, Response } from "express";
import { fibonacci } from "./fib";

export default function fibRoute(req: Request, res: Response): void {
  const { num } = (req.params as { num?: string });

  if (typeof num !== "string") {
    res.status(400).send("Missing route parameter 'num'");
    return;
  }

  const n = Number.parseInt(num, 10);
  if (!Number.isFinite(n) || n < 0) {
    res.status(400).send(`Invalid number: "${num}"`);
    return;
  }

  const value = fibonacci(n);
  res.send(`fibonacci(${n}) is ${value}`);
}



