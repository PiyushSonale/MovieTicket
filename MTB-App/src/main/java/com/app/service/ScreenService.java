package com.app.service;

import java.util.List;

import com.app.exception.ScreenNotFoundException;
import com.app.pojo.Screen;
import com.app.pojo.Theatre;

/**
 * 
 * @category Screen Service
 *
 */
public interface ScreenService {
	public Screen addScreen(Screen screen, Integer theatreId) throws ScreenNotFoundException;
	public List<Screen> viewScreenList() throws ScreenNotFoundException;
	public Screen updateScreen(Screen s, Integer theatreId);
	public Screen viewScreen(int screenId) throws ScreenNotFoundException;
	public Theatre getTheatre(int screenId) throws ScreenNotFoundException;
}
