import { FormEvent, useRef } from "react";

const TodoAdd: React.FC<{ addHandler: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const onSubmithandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    props.addHandler(enteredText);
  };

  return (
    <form onSubmit={onSubmithandler}>
      <div>
        <input type="text" ref={todoTextInputRef} />
        <button>Save</button>
      </div>
    </form>
  );
};
export default TodoAdd;
