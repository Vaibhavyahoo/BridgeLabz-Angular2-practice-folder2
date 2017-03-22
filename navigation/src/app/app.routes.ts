import	{	RouterModule,	Routes	}	from	'@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
const	routes:	Routes	=	[
  		{	path:	'',	redirectTo:	'component-two',	pathMatch:	'full'	},
		{	path:	'component-one',	component: ComponentOneComponent	},
		{	path:	'component-two',	component:	ComponentTwoComponent	}
];
export	const	routing	=	RouterModule.forRoot(routes);
