import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';
import * as L from 'leaflet';
import { FeatureCollection } from 'geojson';

interface Properties {
  OBJECTID_1: number;
  YARDNAME: string;
  KM: number;
}

type GeoJsonData = FeatureCollection<GeoJSON.Geometry, Properties>;

interface MapComponentProps {
  isSelecting: boolean;
  onLineSelect: (lineId: number) => void;
  selectedLines: number[];
  viewedSegment: { lines: number[] } | null;  // Segment to be viewed on the map
}

const MapComponent: React.FC<MapComponentProps> = ({ isSelecting, onLineSelect, selectedLines, viewedSegment }) => {
  const [geoJsonData, setGeoJsonData] = useState<GeoJsonData | null>(null);
  const [mapLayer, setMapLayer] = useState<L.GeoJSON | null>(null);

  // Fetch the GeoJSON data on mount
  useEffect(() => {
    axios.get<GeoJsonData>('/MA_rail_lines.geojson')
      .then((response) => {
        setGeoJsonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the geojson data:', error);
      });
  }, []);

  // Update line color when viewed segment changes
  useEffect(() => {
    if (mapLayer && viewedSegment && geoJsonData) {
      mapLayer.eachLayer((layer: any) => {
        const pathLayer = layer as L.Path;
        const feature = layer.feature as any;

        if (viewedSegment.lines.includes(feature.properties.OBJECTID_1)) {
          pathLayer.setStyle({ color: 'orange' });  // View the segment in orange
        } else if (selectedLines.includes(feature.properties.OBJECTID_1)) {
          pathLayer.setStyle({ color: 'pink' });  // Selected lines in pink
        } else {
          pathLayer.setStyle({ color: 'black' });  // Default color
        }
      });
    }
  }, [viewedSegment, selectedLines, mapLayer, geoJsonData]);

  const onEachFeature = (feature: any, layer: L.Layer) => {
    if (feature.properties) {
      layer.bindPopup(
        `<strong>Yard Name:</strong> ${feature.properties.YARDNAME}<br/><strong>KM:</strong> ${feature.properties.KM}`
      );
    }

    const pathLayer = layer as L.Path;

    const updateLineColor = () => {
      if (selectedLines.includes(feature.properties.OBJECTID_1)) {
        pathLayer.setStyle({ color: 'pink' });  // Selected lines in blue
      } else {
        pathLayer.setStyle({ color: 'black' });  // Default color
      }
    };

    updateLineColor();

    layer.on('click', () => {
      console.log('Line clicked:', feature.properties.OBJECTID_1);
      onLineSelect(feature.properties.OBJECTID_1);
    });
  };

  return (
    <MapContainer center={[42.36, -71.06]} zoom={10} style={{ height: '600px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          onEachFeature={onEachFeature}
          ref={(layer) => setMapLayer(layer)}  // Store reference to the GeoJSON layer
        />
      )}
    </MapContainer>
  );
};

export default MapComponent;
