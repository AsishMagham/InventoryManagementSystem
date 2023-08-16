import React from 'react';
class Inventory {
	item_id: number;
	category: string;
	price_per_unit: number;
	stock_available: number;
	constructor(item_id: number, category: string, price_per_unit: number, stock_available: number) {
		this.item_id = item_id;
		this.category = category;
		this.price_per_unit = price_per_unit;
		this.stock_available = stock_available;
	}
}
export default Inventory;