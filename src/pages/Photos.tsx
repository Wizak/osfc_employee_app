import React, { useState } from 'react';

import {
	IonFab, IonFabButton, IonIcon, IonGrid, 
	IonRow, IonCol, IonImg, IonActionSheet,
} from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';

import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import Page from '../components/Page';


export const GalleryContent: React.FC = () => {
	const { photos, takePhoto, deletePhoto } = usePhotoGallery();
	const [ photoToDelete, setPhotoToDelete ] = useState<UserPhoto>();

	return (
		<React.Fragment>
			<IonGrid>
				<IonRow>
				{photos.map((photo, index) => (
					<IonCol size="6" key={photo.filepath}>
						<IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
					</IonCol>
				))}
				</IonRow>
			</IonGrid>
			<IonFab vertical="bottom" horizontal="center" slot="fixed">
				<IonFabButton onClick={() => takePhoto()}>
					<IonIcon icon={camera}></IonIcon>
				</IonFabButton>
			</IonFab>
			<IonActionSheet
				isOpen={!!photoToDelete}
				buttons={[
					{
						text: 'Delete',
						role: 'destructive',
						icon: trash,
						handler: () => {
							if (photoToDelete) {
							deletePhoto(photoToDelete);
							setPhotoToDelete(undefined);
							}
						},
					},
					{
						text: 'Cancel',
						icon: close,
						role: 'cancel',
					},
				]}
				onDidDismiss={() => setPhotoToDelete(undefined)}
			/>
		</React.Fragment>
	);
};


const GalleryPage = (props) => <Page title="Gallery" component={<GalleryContent {...props} />} />;

export default GalleryPage;