import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import BookingPage from '../pages/BookingPage';
import About from '../pages/About';
import Menu from '../pages/Menu';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';

// 利用可能な時間を初期化する関数
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

// 選択された日付に基づいて利用可能な時間を更新する関数
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // 今のところ、日付に関係なく同じ時間を返す
      // 後でAPIと連携して実際の利用可能時間を取得する
      return initializeTimes();
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
