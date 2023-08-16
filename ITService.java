package com.asish.demo3;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asish.demo3.IT;
import com.asish.demo3.ITRepository;

@Service
public class ITService 
{
	@Autowired
	ITRepository itRepository;
	
	@Transactional(readOnly=true)
	public List<IT> getAllITS()
	{
		return itRepository.findAll();
	}
	
	@Transactional(readOnly=true)
	public List<IT> getITCat(String category)
	{
		return itRepository.findByCategory(category);
	}
	
	@Transactional(readOnly=true)
	public IT getOneIT(int item_id)
	{
		Optional<IT> it = itRepository.findById(item_id);
		if(it.isPresent())
			return it.get();
		return null;
	}
	
	
	@Transactional
	public boolean insertIT(IT it)
	{
		return itRepository.save(it)!=null;
	}
	
	@Transactional
	public boolean modifyIT(IT it)
	{
		return itRepository.save(it)!=null;
	}
	
	@Transactional
	public boolean deleteIT(int item_id)
	{
		long count=itRepository.count();
		itRepository.deleteById(item_id);
		return count>itRepository.count();
	}
}
