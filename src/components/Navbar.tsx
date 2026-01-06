import style from './navbar.module.scss';

export function Navbar() {
  const myNameIs = ['Mogens', 'Jørgen', 'Shakezula', 'Frylock', 'Meatwad', 'Carl Brutananadilewski'];

  const renderedNames = myNameIs.map((name) => <li>{name}</li>);

  return (
    <nav className={style.Navbar}>
      <ul className={style.listStyle}>{renderedNames}</ul>
    </nav>
  );
}
