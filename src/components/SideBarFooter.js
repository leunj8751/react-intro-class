function SideBarFooter({ addMemo }) {
  return (
    <div className="SideBarFooter">
      <button className="SidebarFooter_add_button" onClick={addMemo}>
        추가
      </button>
    </div>
  );
}

export default SideBarFooter;
