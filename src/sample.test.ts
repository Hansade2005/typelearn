// Sample test file for Hansade2005/typelearn
// This is a basic example of a TypeScript function and a simple test

function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Simple test
console.log(greet("World")); // Should output: Hello, World!

// Export for potential use elsewhere
export { greet };