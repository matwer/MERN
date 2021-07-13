import React, {useState } from 'react';
import Tabs from './Tabs';

const ShowContent = ({tab}) => {

    // verify we're getting what we expect
	// console.log(tab);

	//display the content of the currently selected tab
	return (
		<div>
			{tab.content}
		</div>
	)
}

export default ShowContent;