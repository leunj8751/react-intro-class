import MemoList from './MemoList';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';

function SideBar({ memos, setClickedMemoIndex, clickedMemoIndex }) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        setClickedMemoIndex={setClickedMemoIndex}
        clickedMemoIndex={clickedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
}

export default SideBar;
