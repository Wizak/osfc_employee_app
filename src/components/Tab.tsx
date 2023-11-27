import { Route, Redirect } from 'react-router';

import { 
	IonTabs, IonTabBar, IonTabButton, IonIcon, 
	IonLabel, IonRouterOutlet,
} from '@ionic/react';


const Tab: React.FC = ({ tabsConfig, defaultRedirect }) => (
	<IonTabs>
		<IonTabBar slot="bottom">
			{tabsConfig.map((tabData, index) => (
				<IonTabButton tab={tabData.name} href={tabData.url} key={index}>
					<IonIcon icon={tabData.icon} />
					<IonLabel>{tabData.title}</IonLabel>
				</IonTabButton>
			))}
		</IonTabBar>
		<IonRouterOutlet>
			<Route exact path={defaultRedirect.from}>
				<Redirect to={defaultRedirect.to} />
			</Route>
			{tabsConfig.map((tabData, index) => (
				<Route exact path={tabData.url} component={tabData.Component} key={index} />
			))}
		</IonRouterOutlet>
	</IonTabs>
);


export default Tab;