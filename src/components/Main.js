import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import About from '../pages/About';
import Menu from '../pages/Menu';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';

// APIから今日の利用可能な時間を取得
const initializeTimes = () => {
  const today = new Date();
  
  // window.fetchAPIが利用可能か確認
  if (window.fetchAPI) {
    return window.fetchAPI(today);
  }
  
  // フォールバック: APIが利用できない場合のデフォルト時間
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

// 選択された日付に基づいてAPIから利用可能な時間を更新
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // APIから選択された日付の利用可能な時間を取得
      if (window.fetchAPI && action.date) {
        const selectedDate = new Date(action.date);
        return window.fetchAPI(selectedDate);
      }
      return state;
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route 
          path="/reservations" 
          element={
            <BookingPage 
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          } 
        />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;
