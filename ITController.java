package com.asish.demo3;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asish.demo3.IT;
import com.asish.demo3.ITService;
import com.asish.demo3.ITRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/")
public class ITController 
{
	@Autowired
	ITService itService;
	
	@GetMapping(value="/",produces="application/json")
	public ResponseEntity<List<IT>> getAllITS()
	{
		return new ResponseEntity<List<IT>>(itService.getAllITS(),HttpStatus.OK);
	}
	@RequestMapping("/category/{category}")
	public ResponseEntity<List<IT>> getITCat(@PathVariable String category)
	{
		return ResponseEntity.ok(itService.getITCat(category));
	}

	@GetMapping(value="/{item_id}",produces="application/json")
	public ResponseEntity<IT> getOneIT(@PathVariable int item_id)
	{
		IT e = itService.getOneIT(item_id);
		if(e!=null)
			return new ResponseEntity<IT>(e,HttpStatus.OK);
		return new ResponseEntity<IT>(e,HttpStatus.NOT_FOUND);	
	}
	
	@PutMapping(value="/",consumes="application/json")
	public HttpStatus modifyIT(@RequestBody IT it)
	{
		if(itService.insertIT(it))
			return HttpStatus.OK;
		return HttpStatus.NOT_MODIFIED;
	}
	
	@DeleteMapping("/{item_id}")
	public HttpStatus deleteIT(@PathVariable int item_id)
	{
		if(itService.deleteIT(item_id))
			return HttpStatus.OK;
		return HttpStatus.NOT_FOUND;
	}
	

	@PostMapping(value="/",consumes="application/json")
	public HttpStatus addIT(@RequestBody IT it)
	{
		if(itService.insertIT(it))
			return HttpStatus.OK;
		return HttpStatus.NOT_FOUND;
	}
}

