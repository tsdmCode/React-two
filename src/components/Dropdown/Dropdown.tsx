import style from './dropdown.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

export function Dropdown() {
  const hotdog = ['Hot', 'Dog', 'Hotdog', 'Hotdiggitydog'];

  const renderedNames = hotdog.map((hottyD, index) => (
    <li key={index}>
      <a href="#">{hottyD}</a>
    </li>
  ));

  return (
    <nav className={style.myDrop}>
      <GiHamburgerMenu />
      <ul className={style.names}>{renderedNames}</ul>
    </nav>
  );
}
