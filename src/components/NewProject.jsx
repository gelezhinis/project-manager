import { useRef } from 'react';

import Input from './Input';
import Modal from './Modal';

const NewProject = ({onAddProject, onCancelProject}) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const modalRef = useRef()

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dateRef.current.value;

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modalRef.current.open();
      return;
    }

    onAddProject(enteredTitle, enteredDescription, enteredDueDate);
  }

  return (
    <>
    <Modal ref={modalRef} buttonCaption="Okay">
      <h2 className="text-xl font-bold text-stone-500 my-4">Invalid input</h2>
      <p className="text-stone-400">Ooops... looks like you forgot to enter a value.</p>
      <p className="text-stone-400">Please make sure you provide valid value for every input field.</p>
    </Modal>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-stone-700 py-2 px-4 hover:text-stone-950 rounded-md hover:bg-stone-200" onClick={onCancelProject}>Cancel</button></li>
        <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
      </menu>
      <div>
        <Input type="text" labelName="Title" ref={titleRef} />
        <Input isTextarea labelName="Description" ref={descriptionRef} />
        <Input type="date" labelName="Due Date" ref={dateRef} />
      </div>
    </div>
    </>
  );
};

export default NewProject;