import React from 'react';

import { 
	IonHeader, IonPage, IonMenuButton, IonButtons, IonLabel, useIonViewWillLeave,
	IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, useIonViewWillEnter,
} from '@ionic/react';
import { eye } from 'ionicons/icons';

import { randomChoiceElements } from '../helpers/getRandomChoice';
import { initialFakeDocumentsData, fakeDocumentsData } from '../helpers/fakeData';

import DocumentPreviewModal from '../components/DocumentPreviewModal';


export const DocumentsComponent = () => {
	const [documents, setDocuments] = React.useState(initialFakeDocumentsData);
	const [document, setDocument] = React.useState({});
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	useIonViewWillEnter(async () => {
		const pepareData = [...fakeDocumentsData];
		const randDocuments = randomChoiceElements(pepareData, 3, 10);
		let documentsData = randDocuments;
		if (randDocuments.length === 0) {
			documentsData = initialFakeDocumentsData;
		}
		setDocuments(documentsData);
	}, [ documents ]);

	useIonViewWillLeave(async () => {
		const pepareData = [...fakeDocumentsData];
		const randDocuments = randomChoiceElements(pepareData, 3, 10);
		let documentsData = randDocuments;
		if (randDocuments.length === 0) {
			documentsData = initialFakeDocumentsData;
		}
		setDocuments(documentsData);
	}, [ documents ]);

	const openModal = () => {
		setIsModalOpen(true);
	};
  
	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleDocumentClick = (document: any) => {
		openModal();
		setDocument(document);
	};

	return (
		<React.Fragment>
			<IonList>
				{documents.map((document) => (
					<IonItem key={document.id}>
						<IonLabel>{document.name}</IonLabel>
						<IonIcon style={{ cursor: "pointer"}} aria-hidden="true" slot="start" icon={eye} onClick={() => handleDocumentClick(document)}>
							<IonLabel>Preview</IonLabel>
						</IonIcon>
					</IonItem>
				))}
			</IonList>
			<DocumentPreviewModal isOpen={isModalOpen} closeModal={closeModal} document={document} />
		</React.Fragment>
	);
};


const Documents: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Documents</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Documents</IonTitle>
					</IonToolbar>
				</IonHeader>
				<DocumentsComponent />
			</IonContent>
		</IonPage>
	);
};


export default Documents;