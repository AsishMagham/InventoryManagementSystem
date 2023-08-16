import React, { useState } from 'react';
import Inventory from './Inventory.js';
import InventoryService from './InventoryService.js';
import '../Inventory.css';
class InventoryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { msg: null, elist: [], trail: null, condition: false, errorMessage: null, trail2: [], condition2: false, errorMessage2: null };
	}

	getInventorys = () => {
		InventoryService.getAllInventory().then(response => this.setState({ elist: response.data }));
	}

	getInventory = () => {
		InventoryService.getOneInventory(this.refs.txt1.value)
			.then(response => {
				if (response.ok) {
					alert("error");
					throw new Error('An error occurred while fetching data.');
				}
				else {
					if (!response.data) {
						this.setState({ msg: null, errorMessage: "No Item with given Item Id exists", condition: false, condition2: false, trail2: [], errorMessage2: null });
					}
					else {
						this.setState({ msg: null, trail: response.data, condition: true, errorMessage: null, condition2: false, trail2: [], errorMessage2: null })
					}
				}

				// Process the successful response here...
			})
			.catch(error => {
				this.setState({ msg: null, errorMessage: "No Item with given Item Id exists", condition: false, condition2: false, trail2: [], errorMessage2: null });
			});
	}
	getITC = () => {
		InventoryService.getCat(this.refs.txt2.value)
			.then(response => {
				if (response.ok) {
					alert("error");
					throw new Error('An error occurred while fetching data.');
				}
				else {
					if (!response.data) {
						this.setState({ msg: null, errorMessage2: "No Item with given Category exists", condition2: false, condition: false, trail2: [], errorMessage: null });
					}
					else {
						this.setState({ msg: null, trail2: response.data, condition2: true, errorMessage2: null, condition: false, trail: null, errorMessage: null })
					}

				}

				// Process the successful response here...
			})
			.catch(error => {
				this.setState({ msg: null, errorMessage2: "No Item with given Category exists", condition2: false, condition: false, trail2: [], errorMessage: null });
			});
	}

	addInventory = () => {
		if (this.refs.txt1.value == 0) {
			this.setState({ msg: "Please Enter an Item Id", errorMessage: null, errorMessage2: null })
		}
		else {
			InventoryService.getOneInventory(this.refs.txt1.value)
				.then(response => {
					if (!response.ok) {
						this.setState({ msg: "Item with given Item Id already exists", errorMessage: null, errorMessage2: null });
					}
				})
				.catch(error => {
					let e = new Inventory(this.refs.txt1.value, this.refs.txt2.value, this.refs.txt3.value, this.refs.txt4.value);
					InventoryService.insertInventory(e)
						.then(response => {
							if (response.ok) {
								alert("error");
								throw new Error('An error occurred while fetching data.');
							}
							else {
								this.setState({ msg: "Inventory Added Successfully", errorMessage: null, errorMessage2: null, condition: false, trail2: [] })

							}

							// Process the successful response here...
						})
				});

		}
	}
	modInventory = () => {
		if (this.refs.txt1.value == 0) {
			this.setState({ msg: "Please Enter an Item Id", errorMessage: null, errorMessage2: null })
		}
		else {
			InventoryService.getOneInventory(this.refs.txt1.value)
				.then(response => {
					if (!response.ok) {
						let e = new Inventory(this.refs.txt1.value, this.refs.txt2.value, this.refs.txt3.value, this.refs.txt4.value);
						InventoryService.modifyInventory(e)
							.then(response => {
								if (response.ok) {
									alert("error");
									throw new Error('An error occurred while fetching data.');
								}
								else {
									this.setState({ msg: "Inventory Modified Successfully", errorMessage: null, errorMessage2: null, condition: false, trail2: [] })

								}

								// Process the successful response here...
							})

					}
				})
				.catch(error => {
					this.setState({ msg: "Item with given Item Id doesn't exist", errorMessage: null, errorMessage2: null });
				});

		}
	}
	delInventory = () => {
		if (this.refs.txt1.value == 0) {
			this.setState({ msg: "Please Enter an Item Id", errorMessage: null, errorMessage2: null })
		}
		else {
			InventoryService.getOneInventory(this.refs.txt1.value)
				.then(response => {
					if (!response.ok) {
						let e = new Inventory(this.refs.txt1.value, this.refs.txt2.value, this.refs.txt3.value, this.refs.txt4.value);
						InventoryService.deleteInventory(this.refs.txt1.value)
							.then(response => {
								if (response.ok) {
									alert("error");
									throw new Error('An error occurred while fetching data.');
								}
								else {
									this.setState({ msg: "Inventory Deleted Successfully", errorMessage: null, errorMessage2: null, condition: false, trail2: [] })

								}

								// Process the successful response here...
							})

					}
				})
				.catch(error => {
					this.setState({ msg: "Item with given Item Id doesn't exist", errorMessage: null, errorMessage2: null });
				});

		}
	}
	clear = () => {
		this.refs.txt1.value = this.refs.txt2.value = this.refs.txt3.value = this.refs.txt4.value = null;
		this.setState({ msg: null, errorMessage: null, errorMessage2: null, condition: false, trail2: [] })
	}
	render() {
		const { errorMessage } = this.state;
		const { errorMessage2 } = this.state;
		const { msg } = this.state;
		return (
			<>
				{errorMessage && <p class="c">{errorMessage}</p>}
				{errorMessage2 && <p class="c">{errorMessage2}</p>}
				{msg && <p class="c">{msg}</p>}
				<div id="cont">
					<b>Item Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><input type="input" ref="txt1" /><br /><br />
					<b>Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><input type="input" ref="txt2" /><br /><br />
					<b>Price per unit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><input type="input" ref="txt3" /><br /><br />
					<b>Stock available&nbsp;&nbsp;</b><input type="input" ref="txt4" /><br /><br /><br />
					<input type="button" value="Add Inventory" onClick={this.addInventory} id="btn1" />&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="button" value="Modify Inventory" onClick={this.modInventory} id="btn2" />&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
					<input type="button" value="Delete Inventory" onClick={this.delInventory} id="btn3" />&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="button" value="Get Inventory" onClick={this.getInventory} id="btn4" />&nbsp;&nbsp;&nbsp;&nbsp;<br /><br />
					<input type="button" value="Get Inventory by category" onClick={this.getITC} id="btn5" />&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="button" value="Reset" onClick={this.clear} id="btn6" />

				</div>
				<hr />
				<div id="d1">
					<table align="center" width="50%" id="tb1" border="1">
						<caption>Inventory Items</caption>
						<tr>
							<th>Item Id</th>
							<th>Category</th>
							<th>Price Per Unit</th>
							<th>Stock Available</th>
						</tr>
						<tbody>
							{
								this.state.condition &&
								<tr>
									<td>{this.state.trail.item_id}</td>
									<td>{this.state.trail.category}</td>
									<td>{this.state.trail.price_per_unit}</td>
									<td>{this.state.trail.stock_available}</td>

								</tr>
							}


							{
								this.state.trail2.map((e, index) => < tr key={index} >
									<td>{e.item_id}</td>
									<td>{e.category}</td>
									<td>{e.price_per_unit}</td>
									<td>{e.stock_available}</td>
								</tr>
								)
							}
						</tbody>
					</table >
				</div>


				<hr />
				<input type="button" value="Get Inventorys" onClick={this.getInventorys} id="btn7" />
				<div id="d2">
					<table align="center" width="50%" id="tb2" border="1">
						<caption>Inventory List</caption>
						<tr>
							<th>Item Id</th>
							<th>Category</th>
							<th>Price Per Unit</th>
							<th>Stock Available</th>
						</tr>
						<tbody>
							{
								this.state.elist.map((e, index) => < tr key={index} >
									<td>{e.item_id}</td>
									<td>{e.category}</td>
									<td>{e.price_per_unit}</td>
									<td>{e.stock_available}</td>
								</tr>
								)
							}
						</tbody>
					</table >
				</div>
			</>
		);
	}
}
export default InventoryComponent;