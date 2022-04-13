package com.app.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.exception.ScreenNotFoundException;
import com.app.pojo.Screen;
import com.app.pojo.Theatre;
import com.app.repository.ScreenRepository;
import com.app.repository.TheatreRepository;

/**
 * 
 * @category Screen Service Implementation
 */
@Service
public class ScreenServiceImpl implements ScreenService {

	@Autowired
	private ScreenRepository screenRepository;
	@Autowired
	private TheatreRepository theatreRepository;

	/**
	 * @return screenList
	 */
	@Override
	public List<Screen> viewScreenList() throws ScreenNotFoundException {
		List<Screen> screen = screenRepository.findAll();
		if (screen.size() == 0)
			throw new ScreenNotFoundException("No screens found");
		return screen;
	}

	/**
	 * @return screen
	 */
	@Override
	public Screen addScreen(Screen screen, Integer theatreId) throws ScreenNotFoundException {
		Theatre theatre = new Theatre();
		if (theatreId != null) {
			if (screenRepository.existsById(screen.getScreenId())) {
				throw new ScreenNotFoundException("Screen already exists");
			} else {
				theatre = theatreRepository.getOne(theatreId);
				screen.setTheatre(theatre);
			}
			screenRepository.saveAndFlush(screen);
		}
		return screen;
	}
	@Override
	public Screen viewScreen(int screenId) throws ScreenNotFoundException {
		return screenRepository.findById(screenId).get();
		}
	/**
	 * @return updatedScreen
	 */
	@Override
	public Screen updateScreen(Screen screen, Integer theatreId) {
		Theatre theatre = new Theatre();
		if (theatreId != null) {
			theatre = theatreRepository.getOne(theatreId);
			screen.setTheatre(theatre);
		}
		screenRepository.saveAndFlush(screen);
		return screen;
	}

	@Override
	public Theatre getTheatre(int screenId) throws ScreenNotFoundException {
		Screen screen =screenRepository.findById(screenId).get();
		Theatre theatre=screen.getTheatre();
		return theatre;
	}

}
