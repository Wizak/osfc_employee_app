import React from 'react';
import { 
	IonGrid, IonRow, IonCol,  IonLabel, 
	IonInput, useIonViewWillEnter, useIonViewWillLeave,
} from '@ionic/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { initialFakeOrderData, fakeOrdersData } from '../helpers/fakeData';
import { randomChoiceElements } from '../helpers/getRandomChoice';

import Page from '../components/Page';

import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

import './Order.css';


const Delimiter = () => <div className="delimiter" />;


export const OrderContent = () => {
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
				<IonGrid className="container">
					<IonRow>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Customer
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["customer"]}
								className="inputContainer"
							/>
							</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Reference
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["reference"]}
								className="inputContainer"
							/>
							</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Service
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["service"]}
								className="inputContainer"
							/>
						</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Status
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["status"]}
								className="inputContainer"
							/>
						</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Priority
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["priority"]}
								className="inputContainer"
							/>
						</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Autocomplete
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["autocomplete"]}
								className="inputContainer"
							/>
						</IonCol>
						<IonCol sizeXs='12' sizeSm='6'>
							<IonLabel className="label">
								Terminal
							</IonLabel>
							<IonInput
								readonly={true}
								value={order["terminal"]}
								className="inputContainer"
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<IonGrid className="container">
					<IonRow>
						<IonCol sizeXs='12' className='title'>
							<IonLabel className="label">
								ETA - ARRIVAL - TRUCK
							</IonLabel>
						</IonCol>
						<IonCol sizeXs='12'>
							<IonRow>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A date
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_date"]}
										className="inputContainer"
									/>
									</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A time
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_time"]}
										className="inputContainer"
									/>
									</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A slot time
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_slot_time"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Port in
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["port_in"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A 3rd party
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_3rd_party"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Place from
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["place_from"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A show docs
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_show_docs"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A driver
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_driver"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A driver phone
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_driver_phone"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A truck
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_truck"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-A trailer
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_a_trailer"]}
										className="inputContainer"
									/>
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<IonGrid className="container">
					<IonRow>
						<IonCol sizeXs='12' className='title'>
							<IonLabel className="label">
								ETD - ARRIVAL - TRUCK
							</IonLabel>
						</IonCol>
						<IonCol sizeXs='12'>
							<IonRow>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D date
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_date"]}
										className="inputContainer"
									/>
									</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D time
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_time"]}
										className="inputContainer"
									/>
									</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D slot time
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_slot_time"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Port out
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["port_out"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D 3rd party
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_3rd_party"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Place to
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["place_to"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D show docs
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_show_docs"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D driver
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_driver"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D driver phone
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_driver_phone"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D truck
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_truck"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										ETA-D trailer
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["eta_d_trailer"]}
										className="inputContainer"
									/>
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
			<SwiperSlide>
				<IonGrid className="container">
					<IonRow>
						<IonCol sizeXs='12'>
							<IonLabel className="label title">
								SPLIT LOAD
							</IonLabel>
						</IonCol>
						<IonCol sizeXs='12'>
							<IonRow>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Split Load
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["split_load"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Trip no
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["trip_no"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Loading Order
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["loading_no"]}
										className="inputContainer"
									/>
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<Delimiter />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol sizeXs='12'>
							<IonLabel className="label title">
								PLUMB SEAL
							</IonLabel>
						</IonCol>
						<IonCol sizeXs='12'>
							<IonRow>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Plumb/Seal
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["plumb_seal"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Plumb number
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["plumb_number"]}
										className="inputContainer"
									/>
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<Delimiter />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol sizeXs='12'>
							<IonLabel className="label title">
								EXTRA LOADING TIME
							</IonLabel>
						</IonCol>
						<IonCol sizeXs='12'>
							<IonRow>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Extra loading time
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["etra_loading_time"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Is extra load time billable
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["is_etra_time_billable"]}
										className="inputContainer"
									/>
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<Delimiter />
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol sizeXs='12'>
							<IonLabel className="label title">
								STORAGE ALLOCATION
							</IonLabel>
						</IonCol>
						<IonCol sizeXs='12'>
							<IonRow>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Area
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["area"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Is area blocked
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["is_area_blocked"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Label Source
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["label_source"]}
										className="inputContainer"
									/>
								</IonCol>
								<IonCol sizeXs='12' sizeSm='6'>
									<IonLabel className="label">
										Label
									</IonLabel>
									<IonInput
										readonly={true}
										value={order["label"]}
										className="inputContainer"
									/>
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>
				</IonGrid>
			</SwiperSlide>
		</Swiper>
	);
};


const OrderPage = (props) => <Page title="Order" component={<OrderContent {...props} />} />;

export default OrderPage;