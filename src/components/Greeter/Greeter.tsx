interface Greeter {
  name: string;
}

export function Greeter({ name }: Greeter) {
  return <p>Halløjsa, {name}</p>;
}
