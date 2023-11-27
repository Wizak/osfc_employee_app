import React from 'react';
import { 
	IonContent, IonHeader, IonTitle, 
	IonToolbar, IonModal, IonButton,
} from '@ionic/react';


const DocumentPreviewModal: React.FC<any> = ({ isOpen, closeModal, document }) => (
	<IonModal isOpen={isOpen} onIonModalWillDismiss={closeModal}>
		<IonHeader>
			<IonToolbar>
				<IonTitle>{document.name}</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent className="ion-padding">
			{document.type === "pdf" ? 
				<iframe src={document.path} width="100%" height="80%"/>
			:
				<img src={document.path} width="100%" height="80%" />
			}
			<IonButton expand="full" onClick={closeModal}>Close</IonButton>
		</IonContent>
	</IonModal>
);


export default DocumentPreviewModal;