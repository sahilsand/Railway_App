import React from 'react';

interface Segment {
  lines: number[];
}

interface SegmentListProps {
  segments: Segment[];
  onViewSegment: (segment: Segment) => void;
}

const SegmentList: React.FC<SegmentListProps> = ({ segments, onViewSegment }) => {
  return (
    <div>
      <h2>Created Segments</h2>
      {segments.length === 0 ? (
        <p>No segments created yet.</p>
      ) : (
        <ul>
          {segments.map((segment, index) => (
            <li key={index}>
              <strong>Segment {index + 1}:</strong> {segment.lines.length > 0 ? segment.lines.join(', ') : "No lines selected"}
              <button onClick={() => onViewSegment(segment)}>View Segment</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SegmentList;
