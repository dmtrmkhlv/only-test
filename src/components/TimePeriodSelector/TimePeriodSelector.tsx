import React, { useEffect, useState } from "react";
import { TimePeriod } from "../../types";
import "./TimePeriodSelector.scss";
import prevImage from "./../../assets/images/prev.svg";
import nextImage from "./../../assets/images/next.svg";

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
  const radius = 265;

  useEffect(() => {
    setActivePeriod(activeTimePeriod);

    const currentActivePeriodIndex = timePeriods.findIndex(
      (timePeriod) => timePeriod.id === activePeriod?.id
    );

    setActivePeriodIndex(currentActivePeriodIndex);
  }, [activePeriod?.id, activeTimePeriod, timePeriods]);

  const handlePeriodChange = (period: TimePeriod) => {
    setActivePeriod(period);
    onPeriodChange(period);
  };

  return (
    <div className="time-period-wrapper">
      <h1 className="time-period-h1">Исторические даты</h1>
      <div className="time-period-years">
        <div className="time-period-yearStart">{activePeriod?.yearStart}</div>
        <div className="time-period-yearEnd">{activePeriod?.yearEnd}</div>
      </div>
      <div className="time-period-buttons">
        <div className="time-period-buttonsInfo">
          {activePeriod?.number.toString().padStart(2, "0")}/
          {timePeriods.length.toString().padStart(2, "0")}
        </div>
        <div className="time-period-button prev">
          <img src={prevImage} alt="prev" />
        </div>
        <div className="time-period-button next">
          <img src={nextImage} alt="next" />
        </div>
      </div>
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
    </div>
  );
};

export default TimePeriodSelector;
