import React, { useEffect } from 'react';
import { PipeProps } from './Pipe.types';
import style from './Pipe.module.scss';

import * as action from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { websocket } from '../../constants/websoket';
import { InitialState } from '../../redux/types';
import { pipeChecker } from './pipeChecker';

const Pipe: React.FC<PipeProps> = ({ element, x, y, index }) => {
	const dispatch = useDispatch();
	const { map, currentLevel, requestedLevel } = useSelector((state: InitialState) => state);

	useEffect(() => {
		if (pipeChecker(element, x, y, index, currentLevel, map)) {
			dispatch(action.getHelper(`${x} ${y}`));
		}
		// eslint-disable-next-line
	}, [map]);

	const handelClick = () => {

		if(currentLevel !== requestedLevel) return

		websocket.send(`rotate ${x} ${y}`);
		websocket.send('map');
		websocket.onmessage = (e) =>
			e.data === 'rotate: OK' ? false : dispatch(action.getMap(e.data));
	};

	return (
		<span className={style.body} onClick={handelClick}>
			{['m', 'a', 'p', ':'].includes(element) ? '\n' : element}
		</span>
	);
};

export default Pipe;
