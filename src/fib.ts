// src/fib.ts
export function fibonacci(n: number): number {
  if (n < 0) return -1;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const next: number = a + b; // both numbers → stays typed
    a = b;
    b = next;
  }
  return b; // number
}

export default fibonacci;
