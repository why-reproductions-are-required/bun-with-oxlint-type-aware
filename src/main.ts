import { add, greet, isEven } from "./index";

// Type-aware example: using typed function results
const result: number = add(1, 2);
console.log(`1 + 2 = ${result}`);

const message: string = greet("Bun");
console.log(message);

const even: boolean = isEven(4);
console.log(`4 is even: ${even}`);
