import { assertEquals } from "https://deno.land/std@0.95.0/testing/asserts.ts";
import { Queue } from "./mod.ts";

Deno.test(".enqueue()", () => {
  const queue = new Queue();
  queue.enqueue("🦄");
  assertEquals(queue.dequeue(), "🦄");
  queue.enqueue("🌈");
  queue.enqueue("❤️");
  assertEquals(queue.dequeue(), "🌈");
  assertEquals(queue.dequeue(), "❤️");
});

Deno.test(".enqueue(...)", () => {
  const queue = new Queue();
  queue.enqueue("🦄");
  assertEquals(queue.dequeue(), "🦄");
  queue.enqueue("🌈", "❤️");
  assertEquals(queue.dequeue(), "🌈");
  assertEquals(queue.dequeue(), "❤️");
});

Deno.test(".dequeue()", () => {
  const queue = new Queue();
  assertEquals(queue.dequeue(), undefined);
  assertEquals(queue.dequeue(), undefined);
  queue.enqueue("🦄");
  assertEquals(queue.dequeue(), "🦄");
  assertEquals(queue.dequeue(), undefined);
});

Deno.test(".clear()", () => {
  const queue = new Queue();
  queue.clear();
  queue.enqueue(1);
  queue.clear();
  assertEquals(queue.size, 0);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.clear();
  assertEquals(queue.size, 0);
});

Deno.test(".size", () => {
  const queue = new Queue();
  assertEquals(queue.size, 0);
  queue.clear();
  assertEquals(queue.size, 0);
  queue.enqueue("🦄");
  assertEquals(queue.size, 1);
  queue.enqueue("🦄");
  assertEquals(queue.size, 2);
  queue.dequeue();
  assertEquals(queue.size, 1);
  queue.dequeue();
  assertEquals(queue.size, 0);
  queue.dequeue();
  assertEquals(queue.size, 0);
});

Deno.test("iterable", () => {
  const queue = new Queue();
  queue.enqueue("🦄");
  queue.enqueue("🌈");
  assertEquals([...queue], ["🦄", "🌈"]);
});
