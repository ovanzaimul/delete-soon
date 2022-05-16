import React from 'react';
import './components/assets/styles.css';
import { DATA_WHO_ARE_U, NEW_BLOCK_MEMBER } from './components/data/dummy-data';

import BlockGroup from './components/block-group';
import NotBlockGroup from './components/not-block-group';

const BLOCK_MAPING = {
	block_group: BlockGroup,
	not_blockgroup: NotBlockGroup,
};

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { DATA_WHO_ARE_U };
	}

	renderComponent = item => {
		// if (typeof item.data === 'object') {
		// 	return (
		// 		<BlockGroup key={item.id} className='block-group'>
		// 			{item.data.map(i => this.renderComponent(i))}
		// 		</BlockGroup>
		// 	);
		// }
		// if (typeof item.data === 'string') {
		// 	return <NotBlockGroup key={item.id} {...item} />;
		// }
	return <RenderBlock key={item.id} {...item} />

	};


	handleDelete = (id) => {
		const newState = this.state.DATA_WHO_ARE_U.map(item => {
			if(typeof item.data === 'object'){
				return {...item, data: item.data.map(item=>{
					if(typeof item.data === 'object'){
						return {...item, data: item.data.filter(item => {
								return item.id !== id
						}
						)}
					}
					return item
				})}
			}
			return item
		})

		this.setState({ DATA_WHO_ARE_U: newState });
	};

	handleAdd = () => {
		const newState = this.state.DATA_WHO_ARE_U.map(data => {
			if(typeof data.data === 'object'){
				return {...data, data: data.data.map(item=>{
					if(typeof item.data === 'object'){
						return {...item, data: [...item.data, NEW_BLOCK_MEMBER]}
					}
					return item
				})}
			}
			return data
		})

		this.setState({ DATA_WHO_ARE_U: newState });
	};

	render() {
		const { DATA_WHO_ARE_U } = this.state;
		// console.log('this.state:', this.state.DATA_WHO_ARE_U);
		return (
			<div className='App'>
				{DATA_WHO_ARE_U.map(this.renderComponent)}

				<div className='button-container'>
					<button type='button' onClick={()=>this.handleDelete(11131)}>
						delete
					</button>
					<button type='button' onClick={this.handleAdd}>
						add new block
					</button>
				</div>
			</div>
		);
	}
}


export const RenderBlock = (props) => {
	if(BLOCK_MAPING[props.type]){
		const Component = BLOCK_MAPING[props.type]
		return <Component key={props.id} {...props} />
	}
	return null

}