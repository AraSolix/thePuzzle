import React from 'react';
import { HeaderProps } from './Header.types';
import style from './Header.module.scss'

const Header: React.FC<HeaderProps> = ({ text }) => {
	return <div className={style.body}>{text}</div>;
};

export default Header;
