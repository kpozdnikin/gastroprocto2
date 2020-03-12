import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NavState from './NavState';
import MainMenu from './MainMenu';

const Nav = () => {
  const router = useRouter();

  function getClassName(url: string) {
    let className = 'topNav';
    if (router.pathname === url) {
      className = `topNav selected`
    }
    return className;
  }

  return (
    <div className='nav'>
      <strong className='label-top'>
        Болит живот
        <NavState>
          <MainMenu />
        </NavState>
      </strong>
      <Link href="/"><a className={getClassName('/')}>Главная</a></Link>
      <Link href="/blog"><a className={getClassName('/blog')}>Мой блог</a></Link>
      <Link href="/stomachache"><a className={getClassName('/stomachache')}>О боли в животе</a></Link>
      <Link href="/illnesses"><a className={getClassName('/illnesses')}>Заболевания ЖКТ</a></Link>
      <strong className='label-top'>+7 921 726 74 51</strong>
    </div>
  );
};

export default Nav;
