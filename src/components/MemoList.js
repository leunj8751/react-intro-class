function MemoList({ memos, setClickedMemoIndex, clickedMemoIndex }) {
  return (
    <div>
      {memos.map((memo, index) => (
        <div
          className={
            'MemoItem' + (clickedMemoIndex === index ? ' selected' : '')
          }
          key={index}
          onClick={() => {
            setClickedMemoIndex(index);
          }}
        >
          {memo.title}
        </div>
      ))}
    </div>
  );
}

export default MemoList;
