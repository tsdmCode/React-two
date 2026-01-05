export function Navbar() {
  const myNameIs = ['Mogens', 'Jørgen', 'Shakezula', 'Frylock', 'Meatwad', 'Carl Brutananadilewski'];

  const renderedNames = myNameIs.map((name) => <li>{name}</li>);

  return (
    <nav className="Navbar">
      <ul>{renderedNames}</ul>
    </nav>
  );
}
