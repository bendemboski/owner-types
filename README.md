# owner-types

Repro for a type issue with `getOwner(this)`. In `thing.ts`, the `owner` getter produces a type error, but the `owner2` getter does not. Without a cast, the compiler is not recognizing `this` as a `FrameworkObject` so it's picking the version of `getOwner()` that accepts `unknown` and returns `Owner | unknown`.