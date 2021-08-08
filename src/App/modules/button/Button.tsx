import React from 'react';
import { ButtonProps } from './Button.types';
import style from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
	return (
		<button className={style.body} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
