function ButtonBox({ questionCount, step }) {
  const isLast = step === questionCount + 1;

  return (
    <div className="button_box">
      {step === 0 || <button>이전</button>}
      {isLast ? <button>제출</button> : <button>다음</button>}
    </div>
  );
}

export default ButtonBox;
