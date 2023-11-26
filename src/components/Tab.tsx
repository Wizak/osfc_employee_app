import { Route } from 'react-router';

import { 
	IonTabs, IonTabBar, IonTabButton, IonIcon, 
	IonLabel, IonRouterOutlet
} from '@ionic/react';


const Tab: React.FC = ({ pagesConfigData, page }) => {
	const pageTabsData = pagesConfigData[page]["tabs"];

	return (
		<IonTabs>
			<IonTabBar slot="bottom">
				{pageTabsData.map((tabData, index) => (
					<IonTabButton tab={tabData.name} href={tabData.url} key={index}>
						<IonIcon icon={tabData.icon} />
						<IonLabel>{tabData.title}</IonLabel>
					</IonTabButton>
				))}
			</IonTabBar>
			<IonRouterOutlet>
				{pageTabsData.map((tabData, index) => (
					<Route path={tabData.url} component={tabData.Component} key={index} />
				))}
			</IonRouterOutlet>
		</IonTabs>
	);
};

export default Tab;