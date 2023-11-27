import React from 'react';

import { IonRow, IonGrid, IonLabel } from '@ionic/react';

import { useAuth } from '../context/AuthContext';
import Page from '../components/Page';


export const ProfileContent: React.FC = () => {
	const { getPermissions } = useAuth();
	const permissions = getPermissions();

	return (
		<IonGrid>
			<IonRow>
				<IonLabel>Full name: {permissions.fullName}</IonLabel>
			</IonRow>
			<IonRow>
				<IonLabel>Email: {permissions.email}</IonLabel>
			</IonRow>
			<IonRow>
				<IonLabel>Role: {permissions.role}</IonLabel>
			</IonRow>
			<IonRow>
				<IonLabel>Locale: {permissions.locale}</IonLabel>
			</IonRow>
		</IonGrid>
	);
};


const ProfilePage = (props) => <Page title="Profile" component={<ProfileContent {...props} />} />;

export default ProfilePage;