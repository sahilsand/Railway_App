import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import SegmentList from './components/SegmentList';
import SegmentForm from './components/SegmentForm';

interface Segment {
  lines: number[];  // Store line IDs
}

const App: React.FC = () => {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const [selectedLines, setSelectedLines] = useState<number[]>([]);
  const [viewedSegment, setViewedSegment] = useState<Segment | null>(null);  // Segment to be viewed on the map

  // Add a segment after stopping selection
  const addSegment = () => {
    console.log(`Saving segment with lines: ${selectedLines}`);

    if (selectedLines.length === 0) {
      console.log('No lines selected, skipping save.');
      return;  // Don't save empty segments
    }

    // Ensure the full list of selected lines is saved
    setSegments(prevSegments => {
      const updatedSegments = [...prevSegments, { lines: [...selectedLines] }];
      console.log('Updated segments array:', updatedSegments);
      return updatedSegments;
    });

    setSelectedLines([]); // Reset selected lines after segment is saved
  };

  // Handle line selection
  const handleLineSelect = (lineId: number) => {
    setSelectedLines(prevSelectedLines => {
      if (!prevSelectedLines.includes(lineId)) {
        console.log(`Adding line ${lineId} to selection.`);
        return [...prevSelectedLines, lineId];
      } else {
        console.log(`Line ${lineId} already selected.`);
        return prevSelectedLines;
      }
    });
  };

  // Handle viewing a segment on the map
  const handleViewSegment = (segment: Segment) => {
    setViewedSegment(segment);  // Set the segment to be viewed on the map
  };

  return (
    <div className="App">
      <h1>Railway Line Segment Viewer</h1>
      <MapComponent
        isSelecting={isSelecting}
        onLineSelect={handleLineSelect}
        selectedLines={selectedLines}
        viewedSegment={viewedSegment}  // Pass the viewed segment to MapComponent
      />
      <SegmentForm
        addSegment={addSegment}
        isSelecting={isSelecting}
        setIsSelecting={setIsSelecting}
        selectedLines={selectedLines}
      />
      <SegmentList segments={segments} onViewSegment={handleViewSegment} />
    </div>
  );
};

export default App;
