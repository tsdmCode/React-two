import style from './list.module.scss';

interface List {
  listHeader: string;
  listItems: string[];
}

export function List({ listHeader, listItems }: List) {
  const renderedItems = listItems.map((item) => <li>{item}</li>);
  const { favFive } = style; //cool, jeg kan destructure style

  return (
    <>
      <h4>{listHeader}</h4>
      <ul className={favFive}>{renderedItems}</ul>
    </>
  );
}
