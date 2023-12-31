import React, { useState } from 'react';

import {  
	IonInput, IonButton, IonList, IonItem,
	IonLabel, IonCard, IonIcon
} from '@ionic/react';
import { close } from 'ionicons/icons';

import Page from '../components/Page';

import './Barcode.css'; 


export const BarcodeContent: React.FC = () => {
	const [barcode, setBarcode] = useState('');
	const [barcods, setBarcods] = useState(JSON.parse(window.localStorage.getItem("barcode")) || []);

	const handleInputChange = (event) => {
		setBarcode(event.target.value);
	};
  
	const handleInputSubmit = (event) => {
		if (barcode != null || barcode.trim() !== '') {
			const existedBarcodes = JSON.parse(window.localStorage.getItem("barcode")) || [];
			const newBarcodes = [...existedBarcodes, barcode];
			window.localStorage.setItem("barcode", JSON.stringify(newBarcodes));
			setBarcods(newBarcodes);
			setBarcode('');
		};
	};

	const handleClearBarcods = (event) => {
		window.localStorage.setItem("barcode", JSON.stringify([]));
		setBarcods([]);
	};

	return (
		<React.Fragment>
			<IonCard className="barcode-scanner">
				<IonInput
					value={barcode}
					onIonChange={handleInputChange}
					placeholder="Click on input field and scan barcode"
					className="barcode-input"
					clearInput
				/>
				<IonButton
					onClick={handleInputSubmit}
					disabled={barcode === '' || barcode == null}
					className="add-button"
				>
					Add
				</IonButton>
			</IonCard>
			<IonItem className="list-header">
				<IonLabel style={{ color: "#428CFF" }}>Barcodes List</IonLabel>
				<IonButton onClick={handleClearBarcods} size='default' disabled={barcods.length === 0}>
					<IonIcon icon={close} />
				</IonButton>
			</IonItem>
			<IonList className="barcode-list">
				{barcods.map((code, index) =>
					code ? (
						<IonItem key={index} className="list-item">
							<IonLabel>{code}</IonLabel>
						</IonItem>
					) : null
				)}
			</IonList>
		</React.Fragment>
	);
};


const BarcodePage = (props) => <Page title="Barcode" component={<BarcodeContent {...props} />} />;

export default BarcodePage;