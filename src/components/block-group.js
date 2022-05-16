import React from 'react';
import {RenderBlock} from '../App';

const BlockGroup = props => {
	return <div className='block-group'>{
		props.data.map(item => <RenderBlock key={item.id} {...item} />)
		}</div>;
};

export default BlockGroup;
