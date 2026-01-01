import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import SideBar from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo 1',
      content: 'memo content',
      createdAt: 1651225302265,
      updateAt: 1651225302265,
    },
    {
      title: 'Memo 2',
      content: 'memo content',
      createdAt: 1651225302265,
      updateAt: 1651225302265,
    },
  ]);

  const [clickedMemoIndex, setClickedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos]; // 불변성 유지

    newMemos[clickedMemoIndex] = newMemo;
    setMemos(newMemos); // 새로운 배열을 넣어야 state가 새로운 값으로 인식하고 랜더링 함.
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        setClickedMemoIndex={setClickedMemoIndex}
        clickedMemoIndex={clickedMemoIndex}
      />
      <MemoContainer memo={memos[clickedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
