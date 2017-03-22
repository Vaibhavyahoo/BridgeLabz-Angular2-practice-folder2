
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';


import	{	RouterModule,	Routes	}	from	'@angular/router';
const	routes:	Routes	=	[
		{	path:	'component-one',	component:	ComponentOneComponent	},
		{	path:	'component-two',	component:	ComponentTwoComponent	}
];
export	const	routing	=	RouterModule.forRoot(routes);
