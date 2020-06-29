const panel = {
  id: 1,
  name: "panou-gard-wilson-clasic",
};

export function mockRequest(itemName) {
  return new Promise((res, rej) =>
    setTimeout(() => {
      console.log("get", itemName);
      res(panel);
    }, 100)
  );
}
