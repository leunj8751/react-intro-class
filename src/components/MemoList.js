function MemoList({
  memos,
  setClickedMemoIndex,
  clickedMemoIndex,
  deleteMemo,
}) {
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
          <button
            className="MemoItem_delete-button"
            onClick={(e) => {
              deleteMemo(index);
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default MemoList;
