import { initializeTimes, updateTimes } from './BookingPage.js'; // Update the path

describe('initializeTimes', () => {
  it('should return the correct initial available times', () => {
    const expectedTimes = [
      '17:00 ', '18:00 ', '19:00 ', '20:00', 
      '21:00', '22:00 '
    ];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
    it('should return the same state when no relevant action is provided', () => {
      const initialState = [
         '17:00 ', '18:00 ', '19:00 ', '20:00', 
         '21:00', '22:00 '
       ];
  
      const action = { type: 'SOME_OTHER_ACTION' };
      const newState = updateTimes(initialState, action);
      expect(newState).toEqual(initialState);
    });
  
    it('should return the same state when UPDATE_TIMES action is provided', () => {
      const initialState = [
         '17:00 ', '18:00 ', '19:00 ', '20:00', 
         '21:00', '22:00 '
       ];
  
      const action = { type: 'UPDATE_TIMES', payload: '2024-08-12' };
      const newState = updateTimes(initialState, action);
      expect(newState).toEqual(initialState);
    });
});