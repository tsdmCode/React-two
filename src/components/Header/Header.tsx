import { Navbar } from '../Navbar/Navbar';
import style from './header.module.scss';

export function Header() {
  return (
    <>
      <h1 className={style.headerStyle}>Her er min header</h1>
      <Navbar />
    </>
  );
}
