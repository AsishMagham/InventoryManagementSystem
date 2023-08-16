package com.asish.demo3;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;

@Entity
@Table(name="it")
public class IT {
	@Id
	@Column(name="item_id")
	private int item_id;
	@Column(name="category")
	private String category;
	@Column(name="price_per_unit")
	private double price_per_unit;
	@Column(name="stock_available")
	private int stock_available;
	public IT() {}
	public IT(int item_id, String category, double price_per_unit, int stock_available) {
		super();
		this.item_id = item_id;
		this.category = category;
		this.price_per_unit = price_per_unit;
		this.stock_available = stock_available;
	}
	public int getItem_id() {
		return item_id;
	}
	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public double getPrice_per_unit() {
		return price_per_unit;
	}
	public void setPrice_per_unit(double price_per_unit) {
		this.price_per_unit = price_per_unit;
	}
	public int getStock_available() {
		return stock_available;
	}
	public void setStock_available(int stock_available) {
		this.stock_available = stock_available;
	}
	
	
	
}
