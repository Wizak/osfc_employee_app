// src/pages/BluetoothScannerPage.tsx

import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle } from '@ionic/react';
import BarCodeContent from '../components/BarcodeContent';

const BluetoothScannerPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Barcode Scanner</IonTitle>
        </IonToolbar>
      </IonHeader>
      <BarCodeContent />
    </IonPage>
  );
};

export default BluetoothScannerPage;