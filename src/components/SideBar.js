import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';

function SideBar({
  memos,
  setClickedMemoIndex,
  clickedMemoIndex,
  addMemo,
  deleteMemo,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setClickedMemoIndex={setClickedMemoIndex}
        clickedMemoIndex={clickedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SideBarFooter addMemo={addMemo} />
    </div>
  );
}

export default SideBar;
