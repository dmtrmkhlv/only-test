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
  const [years, setYears] = useState<{
    yearStart: number | 0;
    yearEnd: number | 0;
  }>({
    yearStart: 0,
    yearEnd: 0,
  });
  const radius = 265;

  useEffect(() => {
    if (activePeriod) {
      setYears({
        yearStart: activePeriod.yearStart,
        yearEnd: activePeriod.yearEnd,
      });
    }
  }, []);

  useEffect(() => {
    if (activePeriod) {
      const intervalIdRef = setInterval(() => {
        if (years.yearStart === 0) {
          setYears({
            yearStart: activePeriod.yearStart,
            yearEnd: activePeriod.yearEnd,
          });
        }
        setYears((prevYears) => {
          let def = -1;
          if (prevYears.yearStart === activePeriod?.yearStart) {
            clearInterval(intervalIdRef);
            return {
              yearStart: prevYears.yearStart,
              yearEnd: prevYears.yearEnd,
            };
          }
          if (prevYears.yearStart < activePeriod?.yearStart) {
            def = 1;
          }
          return {
            yearStart: prevYears.yearStart + def,
            yearEnd: prevYears.yearEnd + def,
          };
        });
      }, 50);
      return () => {
        if (intervalIdRef) {
          clearInterval(intervalIdRef);
        }
      };
    }
  }, [activePeriod, activePeriod?.id, years.yearStart]);

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

  const handlePeriodSet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const directValue = e.currentTarget.getAttribute("data-direct");
    const direct = directValue === "prev" ? -1 : 1;

    const currentActivePeriodIndex = timePeriods.findIndex(
      (timePeriod) => timePeriod.id === activePeriod?.id
    );

    const newActivePeriod = timePeriods[currentActivePeriodIndex + direct];
    setActivePeriod(newActivePeriod);
    onPeriodChange(newActivePeriod);
  };

  const styleForTimePeriodBox = (index: number) => {
    let def = 0;
    switch (timePeriods.length) {
      case 5:
        def = 12;
        break;
      case 4:
        def = 30;
        break;
      case 3:
        def = 60;
        break;
      case 2:
        def = 120;
        break;
    }
    return {
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) rotate(${
        (index / timePeriods.length) * 360
      }deg) translate(${radius}px) rotate(${
        (360 / timePeriods.length) * (activePeriodIndex + 1) -
        (index / timePeriods.length) * 360 -
        def
      }deg)`,
    };
  };
  const styleForTimePeriodSelector = () => {
    let def = 0;
    switch (timePeriods.length) {
      case 5:
        def = 12;
        break;
      case 4:
        def = 30;
        break;
      case 3:
        def = 60;
        break;
      case 2:
        def = 120;
        break;
    }
    return {
      transform: `rotate(-${
        (360 / timePeriods.length) * (activePeriodIndex + 1) - def
      }deg)`,
    };
  };

  return (
    <div className="time-period-wrapper">
      <h1 className="time-period-h1">Исторические даты</h1>
      {years?.yearStart !== 0 && (
        <div className="time-period-years">
          <div className="time-period-yearStart">{years.yearStart}</div>
          <div className="time-period-yearEnd">{years.yearEnd}</div>
        </div>
      )}
      <div className="time-period-buttons">
        <div className="time-period-buttonsInfo">
          {activePeriod?.number.toString().padStart(2, "0")}/
          {timePeriods.length.toString().padStart(2, "0")}
        </div>
        <button
          className="time-period-button prev"
          disabled={activePeriod?.number === 1}
          data-direct={"prev"}
          onClick={handlePeriodSet}
        >
          <img src={prevImage} alt="prev" />
        </button>
        <button
          className="time-period-button next"
          disabled={activePeriod?.number === timePeriods.length}
          onClick={handlePeriodSet}
          data-direct={"next"}
        >
          <img src={nextImage} alt="next" />
        </button>
      </div>
      <div
        className="time-period-selector"
        style={styleForTimePeriodSelector()}
      >
        {timePeriods.map((period, index) => (
          <div
            key={period.id}
            className="time-period-box"
            style={styleForTimePeriodBox(index)}
          >
            <div
              className={`time-period ${
                activePeriod?.id === period.id ? "active" : "not-active"
              }`}
              onClick={() => handlePeriodChange(period)}
            >
              <div className={"time-period-number"}>{period.number}</div>
              <h2
                className={`time-period-name ${
                  activePeriod?.id === period.id ? "active" : "not-active"
                }`}
              >
                {period.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimePeriodSelector;
