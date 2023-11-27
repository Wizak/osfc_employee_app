import React from 'react';

import { apps, document } from 'ionicons/icons';

import Page from '../components/Page';
import Tab from '../components/Tab';

import Order from './Order';
import Documents from './Documents';


export const tabsConfig =  [
	{ 
		"name": 'order', 
		"title": 'Order',
		"url": '/app/task/order', 
		"icon": apps, 
		"Component": Order,
	},
	{ 
		"name": 'documents', 
		"title": 'Documents', 
		"url": '/app/task/documents', 
		"icon": document, 
		"Component": Documents,
	},
];

export const TaskContent: React.FC = () => <Tab tabsConfig={tabsConfig} defaultRedirect={{ "from": '/app/task', "to": '/app/task/order'}} />;

const TaskPage = (props) => <Page title="Task" component={<TaskContent {...props} />} />;

export default TaskPage;