import React, { useEffect, useState } from 'react';
import style from './Playground.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { InitialState } from '../../redux/types';
import { websocket } from '../../constants/websoket';
import * as action from '../../redux/actions';

import Header from '../../modules/header/Header';
import Button from '../../modules/button/Button';
import LevelSelector from '../../modules/levelSelector/LevelSelector';
import Pipe from '../../modules/pipe/Pipe';

const Playground = () => {
	const [opacity, setOpacity] = useState(true);

	const dispatch = useDispatch();
	const { requestedLevel, currentLevel, map, helper, result } = useSelector(
		(state: InitialState) => state
	);

	const handelNewGame = () => {
		websocket.send(`new ${requestedLevel}`);
		websocket.send('map');

		websocket.onmessage = (e) =>
			e.data === 'new: OK'
				? dispatch(action.getMap('HOLD ON...'))
				: dispatch(action.getMap(e.data));
	};

	const handelResult = () => {
		websocket.send('verify');
		websocket.onmessage = (e) => dispatch(action.getResult(e.data));
	};

	const handelHelper = () => {
		websocket.send(`rotate ${helper.join('\n')}`);
		websocket.send('map');
		websocket.onmessage = (e) => dispatch(action.getMap(e.data));
		dispatch(action.resetHelper());
	};

	useEffect(() => {
		websocket.readyState ? handelNewGame() : setTimeout(handelNewGame, 1000);
		setTimeout(() => setOpacity(false), 500);
		// eslint-disable-next-line
	}, []);

	const renderMap = () => {
		let x = 0;
		let y = -1;

		return map.split('').map((item: string, index: number) => {
			x += 1
			if (item === '\n') {
				x = 0;
				y++;
			}

			return (
				<Pipe key={`${index}PIPE`} element={item} x={x === 0 ? x : x - 1} y={y} index={index} />
			);
		});
	};

	return (
		<div className={style.body} style={{ opacity: opacity ? 0 : 1 }}>
			<Header text='THE PUZZLE' />
			<div className={style.container}>
				<Button
					text='HELPER'
					onClick={handelHelper}
					disabled={!helper.length || requestedLevel > 3 || requestedLevel !== currentLevel}
				/>
				<LevelSelector />
				<Button text='NEW GAME' onClick={handelNewGame} />
			</div>
			<div
				className={style.map}
				onClick={(e: any) => e.preventDefault()}
				style={{ width: currentLevel === 1 ? '240px' : '100%' }}>
				{renderMap()}
			</div>
			<div className={style.container}>
				<Button text='CHECK RESULT' onClick={handelResult} />
				{result ? <div className={style.result}>{result}</div> : false}
			</div>
		</div>
	);
};

export default Playground;
