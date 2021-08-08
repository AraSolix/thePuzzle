import React from 'react';
import style from './App.module.scss';

import { Route } from 'react-router-dom';

import Intro from './pages/Intro/Intro';
import Playground from './pages/playground/Playground';

const App: React.FC = () => {
	return (
		<div className={style.body}>
			<Route path='/' exact component={Intro} />
			<Route path='/playground' exact component={Playground} />
		</div>
	);
};

export default App;
