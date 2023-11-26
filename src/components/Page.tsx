import React from 'react';
import { useParams } from 'react-router';

import { 
	IonButtons, IonContent, IonHeader, IonMenuButton, 
	IonPage, IonTitle, IonToolbar
} from '@ionic/react';


const Page: React.FC = ({ pagesConfigData }) => {
	const { page, tab } = useParams<{ page: string; tab?: string }>();
	const PageComponent =  pagesConfigData[page].Component;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>{pagesConfigData[page].title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">{pagesConfigData[page].title}</IonTitle>
					</IonToolbar>
				</IonHeader>
				<PageComponent pagesConfigData={pagesConfigData} page={page} tab={tab} />
			</IonContent>
		</IonPage>
	);
};

export default Page;