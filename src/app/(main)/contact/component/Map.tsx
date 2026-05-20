"use client"
import { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Car, MapPin, DollarSign, ExternalLink, Navigation, Plus, Minus } from 'lucide-react';

interface CarLocation {
  id: number;
  name: string;
  position: [number, number];
  address: string;
}

// Main rental location
const mainLocation: CarLocation = {
  id: 1,
  name: 'Fast Track Tours & Rentals',
  position: [31.4697, 74.4081],
  address: '153-H, Commercial Zone, Phase 1, DHA Lahore Cantt, Lahore, Pakistan'
};

export function CarRentalMap() {
  const [zoom, setZoom] = useState(15);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 1, 18));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 1, 10));
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${mainLocation.position[0]},${mainLocation.position[1]}`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${mainLocation.position[0]},${mainLocation.position[1]}`;
    window.open(url, '_blank');
  };

  return (
    <div className="w-full h-full relative max-w-6xl mx-auto rounded-lg">
      <Map
        height={600}
        center={mainLocation.position}
        zoom={zoom}
        onBoundsChanged={({ zoom: newZoom }) => setZoom(newZoom)}
      >
        <Marker
          anchor={mainLocation.position}
          color="#dc2626"
        />
      </Map>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <Button
          size="icon"
          variant="secondary"
          onClick={handleZoomIn}
          className="bg-background shadow-lg hover:bg-muted"
        >
          <Plus className="w-4 h-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={handleZoomOut}
          className="bg-background shadow-lg hover:bg-muted"
        >
          <Minus className="w-4 h-4" />
        </Button>
      </div>

      {/* Location Info Card */}
      <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-96 z-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" />
              {mainLocation.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">
                {mainLocation.address}
              </p>
            </div>
            {/* Google Maps Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={openInGoogleMaps}
                className="flex-1 gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                View in Maps
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={getDirections}
                className="flex-1 gap-2"
              >
                <Navigation className="w-4 h-4" />
                Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
