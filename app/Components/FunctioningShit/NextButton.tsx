interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

function NextButton({ onClick, disabled }: NextButtonProps) {
  return (
    <button className="btn w-24" onClick={onClick} disabled={disabled}>
      Next
    </button>
  );
}

export default NextButton;
