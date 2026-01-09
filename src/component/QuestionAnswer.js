function QuestionAnswer({ type, answer }) {
  console.log(type);
  console.log('Type');
  if (type === 'textarea') {
    return <div></div>;
  }

  return (
    <div className="question_answer">
      {answer.map((val, index) => (
        <label key={index}>
          <input type="radio" name="option" value={val} /> {val}
        </label>
      ))}
    </div>
  );
}

export default QuestionAnswer;
