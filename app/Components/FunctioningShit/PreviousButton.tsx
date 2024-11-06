interface PreviousButtonProps {
  onClick: () => void;
  disabled: boolean;
}

function PreviousButton({ onClick, disabled }: PreviousButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Previous
    </button>
  );
}

export default PreviousButton;
