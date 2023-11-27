import React from 'react';

import { 
	IonButtons, IonContent, IonHeader, IonMenuButton, 
	IonPage, IonTitle, IonToolbar
} from '@ionic/react';


const Page: React.FC = ({ title, component }) => (
	<IonPage>
		<IonHeader>
			<IonToolbar>
				<IonButtons slot="start">
					<IonMenuButton />
				</IonButtons>
				<IonTitle>{title}</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent fullscreen>
			<IonHeader collapse="condense">
				<IonToolbar>
					<IonTitle size="large">{title}</IonTitle>
				</IonToolbar>
			</IonHeader>
			{React.cloneElement(component)}
		</IonContent>
	</IonPage>
);


export default Page;