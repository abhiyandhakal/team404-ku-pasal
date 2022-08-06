import FlakeId from "@brecert/flakeid";

export const flake = new FlakeId({
  mid: 1, // optional, define machine id
  timeOffset: (2013 - 1970) * 31536000 * 1000, // optional, define a offset time
});
