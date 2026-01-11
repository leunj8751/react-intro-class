import { useNavigate } from 'react-router-dom';

function ButtonBox({ questionCount, step }) {
  const navigate = useNavigate();
  const isLast = step === questionCount + 1;

  return (
    <div className="button_box">
      {step === 0 || (
        <button
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </button>
      )}
      {isLast ? (
        <button
          onClick={() => {
            navigate(`/survey/id/done`);
          }}
        >
          제출
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </button>
      )}
    </div>
  );
}

export default ButtonBox;
