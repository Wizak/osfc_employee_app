import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IonLabel, IonList, IonItem, IonIcon } from '@ionic/react';
import { eye } from 'ionicons/icons';

import DocumentPreviewModal, { DoumentsPreviewBlock } from './DocumentPreviewModal';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';


export const PhoneDocumentsPreview = ({ documents }) => {
	const [document, setDocument] = React.useState({});
	const [isModalOpen, setIsModalOpen] = React.useState(false);

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
						<IonIcon style={{ cursor: "pointer"}} aria-hidden="true" 
								 slot="start" icon={eye} onClick={() => handleDocumentClick(document)}>
							<IonLabel>Preview</IonLabel>
						</IonIcon>
					</IonItem>
				))}
			</IonList>
			<DocumentPreviewModal isOpen={isModalOpen} closeModal={closeModal} document={document} />
		</React.Fragment>
	);
};


export const TabletDocumentsPreview = ({ documents }) => (
	<Swiper loop>
		{documents.map((doc, index) => (
			<SwiperSlide key={index}>
				<div style={{ height: "100vh", width: "80%", marginTop: "70px" }}>
					<DoumentsPreviewBlock document={doc} />
				</div>
			</SwiperSlide>
		))}
	</Swiper>
);