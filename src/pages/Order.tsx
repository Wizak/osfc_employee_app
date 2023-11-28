import React from 'react';

import { fakeOrdersData } from '../helpers/fakeData';
import { randomChoiceElements } from '../helpers/getRandomChoice';

import Page from '../components/Page';
import PhoneOrderPreviewContent from '../components/OrderPhoneBlocks';
import TabletOrderPreviewContent from '../components/OrderTabletBlocks';


export const OrderContent = () => {
	const order = randomChoiceElements([...fakeOrdersData], 1, 1)[0];

	const isTablet = window.innerWidth >= 768;

	return (
		isTablet
		? <TabletOrderPreviewContent order={order} />
		: <PhoneOrderPreviewContent order={order} />
	);
};


const OrderPage = (props) => <Page title="Order" component={<OrderContent {...props} />} />;

export default OrderPage;