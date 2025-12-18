// Factorial calculator for Hansade2005/typelearn
// Created by Hansade

function factorial(n: number): number {
  if (n < 0) return 0; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Simple test
console.log(factorial(5)); // Should output: 120

// Export for potential use elsewhere
export { factorial };
