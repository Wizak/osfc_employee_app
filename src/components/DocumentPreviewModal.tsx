import React from 'react';
import { 
	IonContent, IonHeader, IonTitle, 
	IonToolbar, IonModal, IonButton,
} from '@ionic/react';


export const DoumentsPreviewBlock = ({ document }) => (
	document.type === "pdf" ? 
		<iframe src={document.path} width="100%" style={{ height: "80vh"}}/>
	:
		<img src={document.path} />
);


const DocumentPreviewModal: React.FC<any> = ({ isOpen, closeModal, document }) => (
	<IonModal isOpen={isOpen} onIonModalWillDismiss={closeModal}>
		<IonHeader>
			<IonToolbar>
				<IonTitle>{document.name}</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent className="ion-padding">
			<DoumentsPreviewBlock document={document} />
			<IonButton expand="full" onClick={closeModal}>Close</IonButton>
		</IonContent>
	</IonModal>
);


export default DocumentPreviewModal;