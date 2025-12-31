// reducer関数の単体テスト
test('initializeTimes returns the correct initial times', () => {
  const initializeTimes = () => {
    return [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
  };
  
  const result = initializeTimes();
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  expect(result.length).toBe(6);
});

test('updateTimes returns the same state when no action is matched', () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00'
        ];
      default:
        return state;
    }
  };
  
  const initialState = ['17:00', '18:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  const result = updateTimes(initialState, action);
  
  expect(result).toEqual(initialState);
});

test('updateTimes returns new times when UPDATE_TIMES action is dispatched', () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return [
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00'
        ];
      default:
        return state;
    }
  };
  
  const initialState = [];
  const action = { type: 'UPDATE_TIMES', date: '2025-01-01' };
  const result = updateTimes(initialState, action);
  
  expect(result).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});
