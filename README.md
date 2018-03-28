# performance-stub
[![Greenkeeper badge](https://badges.greenkeeper.io/JoshuaKGoldberg/performance-stub.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/JoshuaKGoldberg/performance-stub.svg?branch=master)](https://travis-ci.org/JoshuaKGoldberg/performance-stub)
[![NPM version](https://badge.fury.io/js/performance-stub.svg)](http://badge.fury.io/js/performance-stub)

Stub JavaScript performance implementation for tests.

## Usage

```typescript
import { performance } from "performance-stub";
```

The exported `performance` object satisfies TypeScript's `Performance` interface.
All its `number` members are `0`, and all its functions do nothing.

If you don't enjoy name conflicts, you can always import it under a different name:

```typescript
import { performance as stubPerformance } from "performance-stub";
```

### Shallow Overrides

A `createStubPerformance` method is exported that creates new `Performance` instances.
Its first parameter takes in shallow overrides for the object that are spread onto the generated object.

```typescript
import { createStubPerformance } from "performance-stub";

createStubPerformance({
    now: () => myClock.now,
});
```

### Deep Overrides

`createStubPerformance`'s second parameter takes in deep overrides for creating `navigation` and `timing` stubs.

```typescript
import { createStubPerformance } from "performance-stub";

createStubPerformance({}, {
    navigation: {
        redirectCount: 2,
    },
});
```

> These members are `@deprecated` in `lib.d.ts`, and likely should not be used.

## Development

After [forking the repo from GitHub](https://help.github.com/articles/fork-a-repo/):

```
git clone https://github.com/<your-name-here>/performance-stub
cd performance-stub
npm install
npm run src
```
