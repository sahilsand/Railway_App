import React, { useEffect } from 'react';

interface SegmentFormProps {
  addSegment: () => void;
  isSelecting: boolean;
  setIsSelecting: (selecting: boolean) => void;
  selectedLines: number[];
}

const SegmentForm: React.FC<SegmentFormProps> = ({ addSegment, isSelecting, setIsSelecting, selectedLines }) => {

  useEffect(() => {
    console.log(`isSelecting updated: ${isSelecting}`);
  }, [isSelecting]);

  // Start line selection
  const startSelecting = () => {
    console.log('Starting line selection...');
    setIsSelecting(true);  // Set selecting mode
  };

  // Stop line selection and save segment
  const stopSelectingAndSave = () => {
    console.log('Stopping line selection and saving segment...');
    setIsSelecting(false);  // Stop selecting mode
    addSegment();  // Call addSegment function
  };

  return (
    <div>
      {!isSelecting ? (
        <button type="button" onClick={startSelecting}>
          Start Selecting Lines
        </button>
      ) : (
        <button type="button" onClick={stopSelectingAndSave}>
          Stop Selection & Save Segment
        </button>
      )}
    </div>
  );
};

export default SegmentForm;
