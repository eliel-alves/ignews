import Image from 'next/image';

import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" width={109} height={31} alt="ig.news" />

        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Posts</a>
        </nav>
        
        <SignInButton />
      </div>
    </header>
  );
}