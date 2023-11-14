import { useEffect, useState } from "react";
const TIME = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIME);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const time = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIME} />
    </div>
  );
}
