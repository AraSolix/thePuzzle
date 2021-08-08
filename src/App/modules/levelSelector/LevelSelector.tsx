import React, { useState } from 'react';
import style from './LevelSelector.module.scss';

import { InitialState } from '../../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../redux/actions';
import { levels } from '../../constants/pipes'

const LevelSelector: React.FC = () => {
	const [dropList, setDropList] = useState(false);

	const { requestedLevel } = useSelector((state: InitialState) => state);
	const dispatch = useDispatch();

	const handelClick = (num: number) => {
		dispatch(action.selectLevel(num));
		setDropList(false);
	};

	return (
		<div className={style.body}>
			<div className={style.button} onClick={() => setDropList(true)}>
				{requestedLevel ? `LEVEL ${requestedLevel}` : 'SELECT LEVEL'}
			</div>
			<div className={style.dropList} style={{ display: dropList ? 'block' : 'none' }}>
				{levels.map((item, index) => (
					<div
						className={style.dropListItem}
						key={`${index}LEVEL`}
						onClick={() => handelClick(item)}>
						Level {item}
					</div>
				))}
			</div>
		</div>
	);
};

export default LevelSelector;
