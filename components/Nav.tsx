import React from 'react';
import Link from 'next/link';
import NavState from './NavState';
import MainMenu from './MainMenu';

const Nav = () => {
  return (
    <div className='nav'>
      <strong className='label-top'>
        Болит живот
        <NavState>
          <MainMenu />
        </NavState>
      </strong>
      <Link href="/"><a className='topNav'>Главная</a></Link>
      <Link href="/blog"><a className='topNav'>Мой блог</a></Link>
      <Link href="/stomachache"><a className='topNav'>О боли в животе</a></Link>
      <Link href="/illnesses"><a className='topNav'>Заболевания ЖКТ</a></Link>
      <strong className='label-top'>+7 921 726 74 51</strong>
    </div>
  );
};

export default Nav;
