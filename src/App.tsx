import React from 'react'
import './App.css'
import Header from './Header'
import Counter from './Counter'
import Article from './Article'
import ChangeName from './ChangeName'
import Reducer from './Reducer'
import Context from './Context'

function App() {
	return (
		<div className='App'>
			{/* <Header name='jack' age={20}> <p>我是header的子内容</p> </Header> */}
			{/* <Counter initial={2} /> */}
			{/* <Article title='article-1' /> */}
			{/* <ChangeName title='name1' /> */}
			<Reducer initialCount={2} />
			{/* <Context initialCount={2} /> */}
		</div>
	)
}

export default App
