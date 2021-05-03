# yocto_queue

Same as [yocto-queue](https://www.npmjs.com/package/yocto-queue) but for Deno.

## Usage

```typescript
import { Queue } from "https://deno.land/x/yocto_queue@v0.1.1/mod.ts";

const queue = new Queue();

queue.enqueue("🦄");
queue.enqueue("🌈");

console.log(queue.size);
//=> 2

console.log(...queue);
//=> '🦄 🌈'

console.log(queue.dequeue());
//=> '🦄'

console.log(queue.dequeue());
//=> '🌈'
```

## API

### `queue = new Queue()`

The instance is an [`Iterable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols), which means you can iterate over the queue front to back with a “for…of” loop, or use spreading to convert the queue to an array. Don't do this unless you really need to though, since it's slow.

#### `.enqueue(value)`

Add a value to the queue.

#### `.enqueue(...values)`

Add multiply values to the queue.

#### `.dequeue()`

Remove the next value in the queue.

Returns the removed value or `undefined` if the queue is empty.

#### `.clear()`

Clear the queue.

#### `.size`

The size of the queue.
