import React, { useState } from 'react';
import style from './Intro.module.scss';

import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { InitialState } from '../../redux/types';

import Header from '../../modules/header/Header';
import Button from '../../modules/button/Button';
import LevelSelector from '../../modules/levelSelector/LevelSelector';

const Intro: React.FC = () => {
	const history = useHistory();

	const [click, setClick] = useState(false);

	const { requestedLevel } = useSelector((state: InitialState) => state);

	const handelClick = () => {
		setClick(true);
		setTimeout(() => history.push('/playground'), 500);
	};

	return (
		<div className={style.body} style={{ opacity: click ? 0 : 1 }}>
			<Header text='THE PUZZLE' />
			<LevelSelector />
			<Button text='START' onClick={handelClick} disabled={!requestedLevel} />
		</div>
	);
};

export default Intro;
