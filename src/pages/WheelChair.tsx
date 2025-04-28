import React, { useState, useCallback } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Bell, AlertTriangle } from "lucide-react";

const WheelchairControl: React.FC = () => {
  const [speed, setSpeed] = useState<number>(0);
  const [divColors, setDivColors] = useState<{
    up: string;
    down: string;
    left: string;
    right: string;
  }>({
    up: "bg-gray-700",
    down: "bg-gray-700",
    left: "bg-gray-700",
    right: "bg-gray-700",
  });

  const handleDirection = useCallback((direction: "up" | "down" | "left" | "right") => {
    console.log(`Moving ${direction}`);
    setDivColors(prev => ({ ...prev, [direction]: "bg-green-500" }));
    setTimeout(() => setDivColors(prev => ({ ...prev, [direction]: "bg-gray-700" })), 1000);
  }, []);

  const handleSpecialAction = (action: string) => {
    console.log(`Performing ${action}`);
  };

  const adjustSpeed = (increment: boolean) => {
    setSpeed(prev => {
      const newSpeed = increment ? Math.min(prev + 1, 10) : Math.max(prev - 1, 0);
      console.log(`Speed set to ${newSpeed}`);
      return newSpeed;
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl text-center mb-4">Wheelchair Control Panel</h2>
        
        {/* Direction Controls */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          <div></div>
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center transition-colors ${divColors.up}`}>
            <button
              className="w-16 h-16 flex items-center justify-center border border-transparent rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => handleDirection("up")}
            >
              <ArrowUp className="h-8 w-8" />
            </button>
          </div>
          <div></div>

          <div className={`w-20 h-20 rounded-lg flex items-center justify-center transition-colors ${divColors.left}`}>
            <button
              className="w-16 h-16 flex items-center justify-center border border-transparent rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => handleDirection("left")}
            >
              <ArrowLeft className="h-8 w-8" />
            </button>
          </div>
          <div></div>
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center transition-colors ${divColors.right}`}>
            <button
              className="w-16 h-16 flex items-center justify-center border border-transparent rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => handleDirection("right")}
            >
              <ArrowRight className="h-8 w-8" />
            </button>
          </div>

          <div></div>
          <div className={`w-20 h-20 rounded-lg flex items-center justify-center transition-colors ${divColors.down}`}>
            <button
              className="w-16 h-16 flex items-center justify-center border border-transparent rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => handleDirection("down")}
            >
              <ArrowDown className="h-8 w-8" />
            </button>
          </div>
          <div></div>
        </div>

        {/* Speed Control */}
        <div className="space-y-2 mt-6">
          <h3 className="text-lg font-semibold">Speed Control</h3>
          <div className="flex items-center justify-center space-x-4">
            <button
              className="w-12 h-12 flex items-center justify-center border border-transparent rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => adjustSpeed(false)}
              disabled={speed === 0}
            >
              -
            </button>
            <div className="w-32">
              <div className="relative h-2 bg-gray-700">
                <div className="absolute top-0 left-0 h-2 bg-blue-500" style={{ width: `${speed * 10}%` }}></div>
              </div>
            </div>
            <button
              className="w-12 h-12 flex items-center justify-center border border-transparent rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={() => adjustSpeed(true)}
              disabled={speed === 10}
            >
              +
            </button>
          </div>
          <div className="text-center text-2xl font-bold">{speed} / 10</div>
        </div>

        {/* Special Actions */}
        <div className="space-y-2 mt-6">
          <h3 className="text-lg font-semibold">Special Actions</h3>
          <div className="flex justify-center gap-4">
            <button
              className="w-16 h-16 flex items-center justify-center border border-transparent rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              onClick={() => handleSpecialAction("Horn")}
            >
              <Bell className="h-8 w-8" />
            </button>
            <button
              className="w-16 h-16 flex items-center justify-center border border-transparent rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              onClick={() => handleSpecialAction("Emergency Stop")}
            >
              <AlertTriangle className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WheelchairControl;

