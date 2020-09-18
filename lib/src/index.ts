export interface SomeObj {
  a: number;
  b: string;
}

export function getSomeObj(x: number): SomeObj {
  if (x > 10) {
    return {
      a: 10,
      b: "10 or greater",
    };
  } else {
    return {
      a: 0,
      b: "less than 10",
    };
  }
}
