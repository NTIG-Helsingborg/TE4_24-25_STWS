interface PreviousButtonProps {
  onClick: () => void;
  disabled: boolean;
}

function PreviousButton({ onClick, disabled }: PreviousButtonProps) {
  return (
    <button className="btn w-24" onClick={onClick} disabled={disabled}>
      Previous
    </button>
  );
}

export default PreviousButton;
