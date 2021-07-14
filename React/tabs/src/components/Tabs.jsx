import React, {useState } from 'react';

import ShowContent from './ShowContent';

import tabscss from './TabsCSS.module.css' 



const Tabs = ({tab, idx, tabs, displayContent}) => {
    
	// verify we're getting what we expect
	// console.log("idx " + idx);
	// console.log("header " + tab.header);
	// console.log("content " + tab.content);

	return (
		<>
			<div style = {{
				borderStyle: "solid",
				borderWidth: "1px",
				borderRadius: "10px",
				display: "inline-flex",
				flexWrap: "wrap",
				verticalAlign: "top",
				margin: "3px"
			}}>
				{/* onClick displays the content if the button that was clicked */}
				<button onClick = { () => getIndex(idx) } >{ tab.header }</button>
			</div>
		</>
	)
}

export default Tabs;
