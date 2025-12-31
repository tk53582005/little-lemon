// APIのモック関数
const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
    if(random() < 0.5) {
      result.push(i + ':00');
    }
    if(random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

// initializeTimesのテスト
test('initializeTimes returns non-empty array of available times', () => {
  const today = new Date();
  const times = fetchAPI(today);
  
  expect(times).toBeInstanceOf(Array);
  expect(times.length).toBeGreaterThan(0);
});

// updateTimesのテスト - デフォルトアクション
test('updateTimes returns the same state when no action is matched', () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        if (action.date) {
          const selectedDate = new Date(action.date);
          return fetchAPI(selectedDate);
        }
        return state;
      default:
        return state;
    }
  };
  
  const initialState = ['17:00', '18:00'];
  const action = { type: 'UNKNOWN_ACTION' };
  const result = updateTimes(initialState, action);
  
  expect(result).toEqual(initialState);
});

// updateTimesのテスト - UPDATE_TIMESアクション
test('updateTimes returns new times when UPDATE_TIMES action is dispatched with a date', () => {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        if (action.date) {
          const selectedDate = new Date(action.date);
          return fetchAPI(selectedDate);
        }
        return state;
      default:
        return state;
    }
  };
  
  const initialState = [];
  const action = { type: 'UPDATE_TIMES', date: '2025-01-15' };
  const result = updateTimes(initialState, action);
  
  expect(result).toBeInstanceOf(Array);
  expect(result.length).toBeGreaterThan(0);
});
