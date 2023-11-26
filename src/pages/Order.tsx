import React from 'react';
import { 
	IonHeader, IonPage, IonToolbar, IonTitle, IonContent,
	IonButtons, IonMenuButton, IonGrid, IonRow, IonCol, 
	IonLabel, IonInput, useIonViewWillEnter, useIonViewWillLeave,
} from '@ionic/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import { initialFakeOrderData, fakeOrdersData } from '../helpers/fakeData';
import { randomChoiceElements } from '../helpers/getRandomChoice';
import { DocumentsComponent } from './Documents';


const styles = {
	container: {
		padding: '16px',
		margin: '30px',
		backgroundColor: "white",
		borderRadius: "40px",
	},
	label: {
		fontWeight: 'bold',
		marginBottom: '8px',
		display: 'block',
		color: '#333',
	},
	inputContainer: {
		marginBottom: '16px',
		color: "black",
	},
	select: {
		width: '100%',
		padding: '10px',
		borderRadius: '8px',
		border: '1px solid #ccc',
		backgroundColor: '#fff',
		color: '#333',
	},
};


export const OrderComponent = () => {
	const [order, setOrder] = React.useState(initialFakeOrderData);

	useIonViewWillEnter(async () => {
		const pepareData = [...fakeOrdersData];
		const randOrders = randomChoiceElements(pepareData, 1, 1);
		let orderData = randOrders[0];
		if (randOrders.length === 0) {
			orderData = initialFakeOrderData;
		}
		setOrder(orderData);
	}, [ order ]);

	useIonViewWillLeave(async () => {
		const pepareData = [...fakeOrdersData];
		const randOrders = randomChoiceElements(pepareData, 1, 1);
		let orderData = randOrders[0];
		if (randOrders.length === 0) {
			orderData = initialFakeOrderData;
		}
		setOrder(orderData);
	}, [ order ]);

	return (
		<Swiper loop={true}>
			<SwiperSlide>
				<IonGrid style={{ ...styles.container, height: "100%"}}>
					<IonRow>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Customer
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["customer"]}
								style={styles.inputContainer}
							/>
							</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Reference
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["reference"]}
								style={styles.inputContainer}
							/>
							</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Service
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["service"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Status
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["status"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Priority
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["priority"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Autocomplete
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["autocomplete"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Terminal
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["terminal"]}
								style={styles.inputContainer}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<IonGrid style={styles.container}>
					<IonLabel style={styles.label}>
						ETA - ARRIVAL - TRUCK
					</IonLabel>
					<IonRow>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A date
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_date"]}
								style={styles.inputContainer}
							/>
							</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A time
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_time"]}
								style={styles.inputContainer}
							/>
							</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A slot time
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_slot_time"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Port in
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["port_in"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A 3rd party
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_3rd_party"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Place from
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["place_from"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A show docs
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_show_docs"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A driver
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_driver"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A driver phone
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_driver_phone"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A truck
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_truck"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-A trailer
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_a_trailer"]}
								style={styles.inputContainer}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<IonGrid style={styles.container}>
					<IonLabel style={styles.label}>
						ETD - ARRIVAL - TRUCK
					</IonLabel>
					<IonRow>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D date
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_date"]}
								style={styles.inputContainer}
							/>
							</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D time
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_time"]}
								style={styles.inputContainer}
							/>
							</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D slot time
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_slot_time"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Port out
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["port_out"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D 3rd party
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_3rd_party"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Place to
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["place_to"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D show docs
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_show_docs"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D driver
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_driver"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D driver phone
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_driver_phone"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D truck
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_truck"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								ETA-D trailer
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["eta_d_trailer"]}
								style={styles.inputContainer}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<IonGrid style={styles.container}>
					<IonRow>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Split Load
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["split_load"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Trip no
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["trip_no"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Loading Order
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["loading_no"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Plumb/Seal
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["plumb_seal"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Plumb number
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["plumb_number"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Extra load time
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["etra_loading_time"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Is extra load time billable
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["is_etra_time_billable"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Area
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["area"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Is area blocked
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["is_area_blocked"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Label Source
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["label_source"]}
								style={styles.inputContainer}
							/>
						</IonCol>
						<IonCol size='12' sizeSm='6'>
							<IonLabel style={styles.label}>
								Label
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["label"]}
								style={styles.inputContainer}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<DocumentsComponent />
			</SwiperSlide>
		</Swiper>
	);
};

const Order: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton />
					</IonButtons>
					<IonTitle>Order</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Order</IonTitle>
					</IonToolbar>
				</IonHeader>
				<OrderComponent />
			</IonContent>
		</IonPage>
	);
};


export default Order;