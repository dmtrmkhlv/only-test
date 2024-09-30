import React, { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TimePeriod } from "../../types";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import TimePeriodSelector from "../TimePeriodSelector/TimePeriodSelector";
import "./TimePeriodBlock.scss";

const TimePeriodBlock: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<TimePeriod | null>(null);
  const timePeriods = useMemo<TimePeriod[]>(
    () => [
      {
        id: uuidv4(),
        name: "1",
        number: 1,
        yearStart: 1981,
        yearEnd: 1986,
        events: [
          {
            year: 1981,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1982,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1983,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1984,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1985,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Кино",
        number: 2,
        yearStart: 1987,
        yearEnd: 1991,
        events: [
          {
            year: 1987,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1988,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1989,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1990,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1991,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Литература",
        number: 3,
        yearStart: 1992,
        yearEnd: 1997,
        events: [
          {
            year: 1992,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1994,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1995,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 1997,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "",
        number: 4,
        yearStart: 1999,
        yearEnd: 2004,
        events: [
          {
            year: 1999,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2000,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2002,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2003,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2004,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "5",
        number: 5,
        yearStart: 2009,
        yearEnd: 2014,
        events: [
          {
            year: 2009,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2010,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2011,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2012,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2014,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Наука",
        number: 6,
        yearStart: 2015,
        yearEnd: 2022,
        events: [
          {
            year: 2015,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2016,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2017,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2018,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2019,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
          {
            year: 2020,
            content:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quisquam ut cupiditate incidunt veniam dolores iure nostrum minima quam eaque qui porro accusamus totam perspiciatis, amet molestias excepturi aut vero.",
          },
        ],
      },
    ],
    []
  );

  useEffect(() => {
    if (timePeriods.length > 0) {
      setActivePeriod(timePeriods[0]);
    }
  }, []);

  const handlePeriodChange = (period: TimePeriod) => {
    setActivePeriod(period);
  };

  return (
    <div className="time-period-block">
      <TimePeriodSelector
        timePeriods={timePeriods}
        activeTimePeriod={activePeriod}
        onPeriodChange={handlePeriodChange}
      />
      {activePeriod && <SwiperSlider events={activePeriod.events} />}
    </div>
  );
};

export default TimePeriodBlock;
