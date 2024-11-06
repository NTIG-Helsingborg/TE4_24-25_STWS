interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

function NextButton({ onClick, disabled }: NextButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Next
    </button>
  );
}

export default NextButton;
