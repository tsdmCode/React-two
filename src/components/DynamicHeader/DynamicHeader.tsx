interface DynamicHeader {
  headerText: string;
}

export function DynamicHeader({ headerText }: DynamicHeader) {
  return <h1>{headerText ? headerText : 'Mangler Header Text'}</h1>;
}
