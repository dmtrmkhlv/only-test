import React, { useEffect, useState } from "react";
import { TimePeriod } from "../../types";
import "./TimePeriodSelector.scss";

interface TimePeriodSelectorProps {
  timePeriods: TimePeriod[];
  activeTimePeriod: TimePeriod | null;
  onPeriodChange: (period: TimePeriod) => void;
}

const TimePeriodSelector: React.FC<TimePeriodSelectorProps> = ({
  timePeriods,
  activeTimePeriod,
  onPeriodChange,
}) => {
  const [activePeriod, setActivePeriod] = useState<TimePeriod | null>(null);
  const [activePeriodIndex, setActivePeriodIndex] = useState<number>(0);
  const radius = 120;

  useEffect(() => {
    setActivePeriod(activeTimePeriod);

    const currentActivePeriodIndex = timePeriods.findIndex(
      (timePeriod) => timePeriod.id === activePeriod?.id
    );

    setActivePeriodIndex(currentActivePeriodIndex);
  }, [activeTimePeriod]);

  const handlePeriodChange = (period: TimePeriod) => {
    setActivePeriod(period);
    onPeriodChange(period);
  };

  return (
    <div
      className="time-period-selector"
      style={{
        transform: `rotate(-${
          (360 / timePeriods.length) * (activePeriodIndex + 1)
        }deg)`,
      }}
    >
      {timePeriods.map((period, index) => (
        <div
          key={period.id}
          style={{
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${
              (index / timePeriods.length) * 360
            }deg) translate(${radius}px) rotate(${
              (360 / timePeriods.length) * (activePeriodIndex + 1) -
              (index / timePeriods.length) * 360
            }deg)`,
            // transform: `translate(-50%, -50%) rotate(${
            //   (index / timePeriods.length) * 360
            // }deg) translate(${radius}px) rotate(-${
            //   (activePeriodIndex / timePeriods.length) * 360 -
            //   (360 / timePeriods.length) * (activePeriodIndex + 1)
            // }deg)`,
          }}
          className={`time-period ${
            activePeriod?.id === period.id ? "active" : ""
          }`}
          onClick={() => handlePeriodChange(period)}
        >
          {period.number}
          <h2
            className={`time-period-name ${
              activePeriod?.id === period.id ? "active" : ""
            }`}
          >
            {period.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TimePeriodSelector;
