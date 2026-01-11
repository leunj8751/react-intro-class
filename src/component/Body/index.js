import TextInput from '../TextInput';

function Body({ type, answer, setAnswer }) {
  let InputComponent = null;

  if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'select') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextInput;
  }

  return (
    <>
      <InputComponent answer={answer} setAnswer={setAnswer} />
    </>
  );
}

export default Body;
