import React from 'react';
import { IonGrid, IonRow, IonCol,  IonLabel, IonInput } from '@ionic/react';

import './OrderTabletBlocks.css';


export const Delimiter = () => <div className="delimiter" />;


export const OrderGeneralBlock = ({ order }) => (
	<IonRow>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Customer
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["customer"]}
				className="inputContainer"
			/>
			</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Reference
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["reference"]}
				className="inputContainer"
			/>
			</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Service
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["service"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Status
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["status"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Priority
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["priority"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Autocomplete
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["autocomplete"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
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
);


export const OrderETABlock = ({ order, prefix }) => (
	<IonRow>
		<IonCol sizeXs='12' className='title'>
			<IonLabel className="label">
				{prefix.toUpperCase()} - ARRIVAL - TRUCK
			</IonLabel>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} date
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_date"]}
				className="inputContainer"
			/>
			</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} time
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_time"]}
				className="inputContainer"
			/>
			</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} slot time
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_slot_time"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Port {prefix === 'eta' ? 'in' : 'out'}
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["port_in"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} 3rd party
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_3rd_party"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Place {prefix === 'eta' ? 'from' : 'to'}
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["place_from"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} show docs
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_show_docs"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} driver
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_driver"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} driver phone
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_driver_phone"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} truck
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_truck"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				ETA-{prefix === 'eta' ? 'A' : 'D'} trailer
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["eta_a_trailer"]}
				className="inputContainer"
			/>
		</IonCol>
	</IonRow>
);


export const OrderSplitLoadBlock = ({ order }) => (
	<IonRow>
		<IonCol sizeXs='12'>
			<IonLabel className="label title">
				SPLIT LOAD
			</IonLabel>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='2'>
			<IonLabel className="label">
				Split Load
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["split_load"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='5'>
			<IonLabel className="label">
				Trip no
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["trip_no"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='5'>
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
);


export const OrderPlumbSealBlock = ({ order }) => (
	<IonRow>
		<IonCol sizeXs='12'>
			<IonLabel className="label title">
				PLUMB SEAL
			</IonLabel>
		</IonCol>
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
);


export const OrderExtraLoadingTimeBlock = ({ order }) => (
	<IonRow>
		<IonCol sizeXs='12'>
			<IonLabel className="label title">
				EXTRA LOADING TIME
			</IonLabel>
		</IonCol>
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
);


export const OrderStorageAllocationBlock = ({ order }) => (
	<IonRow>
		<IonCol sizeXs='12'>
			<IonLabel className="label title">
				STORAGE ALLOCATION
			</IonLabel>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Area
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["area"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Is area blocked
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["is_area_blocked"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
			<IonLabel className="label">
				Label Source
			</IonLabel>
			<IonInput
				readonly={true}
				value={order["label_source"]}
				className="inputContainer"
			/>
		</IonCol>
		<IonCol sizeXs='12' sizeSm='6' sizeMd='4'>
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
);


const TabletOrderPreviewContent = ({ order }) => (
	<IonGrid className='container'>
		<OrderGeneralBlock order={order} />
		<Delimiter />
		<OrderETABlock order={order} prefix={"eta"} />
		<Delimiter />
		<OrderETABlock order={order} prefix={"etd"} />
		<Delimiter />
		<OrderSplitLoadBlock order={order} />
		<Delimiter />
		<OrderPlumbSealBlock order={order} />
		<Delimiter />
		<OrderExtraLoadingTimeBlock order={order} />
		<Delimiter />
		<OrderStorageAllocationBlock order={order} />
	</IonGrid>
);


export default TabletOrderPreviewContent;