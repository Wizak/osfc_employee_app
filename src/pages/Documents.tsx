import React from 'react';

import Page from '../components/Page';
import { PhoneDocumentsPreview, TabletDocumentsPreview } from '../components/DocumentsPreviewContent';

import { fakeDocumentsData } from '../helpers/fakeData';
import { randomChoiceElements } from '../helpers/getRandomChoice';


export const DocumentsContent = () => {
	const documents = randomChoiceElements([...fakeDocumentsData], 3, 10);

	const isTablet = window.innerWidth >= 768;

	return (
		isTablet
		? <TabletDocumentsPreview documents={documents} />
		: <PhoneDocumentsPreview documents={documents} />
	);
};


const DocumentsPage = (props) => <Page title="Documents" component={<DocumentsContent {...props} />} />;

export default DocumentsPage;