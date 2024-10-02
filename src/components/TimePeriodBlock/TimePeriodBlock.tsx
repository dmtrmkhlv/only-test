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
            content: "«Хищник»/Predator, США (реж. Джон Мактирнан)",
          },
          {
            year: 1988,
            content:
              "«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)",
          },
          {
            year: 1989,
            content:
              "«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)",
          },
          {
            year: 1990,
            content: "«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)",
          },
          {
            year: 1991,
            content:
              "«Семейка Аддамс»/The Addams Family, США, (реж. Барри Зонненфельд)",
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
              "Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».",
          },
          {
            year: 1994,
            content: "«Бессонница» — роман Стивена Кинга.",
          },
          {
            year: 1995,
            content: "Нобелевская премия по литературе — Шеймас Хини",
          },
          {
            year: 1997,
            content: "«Гарри Поттер и Философский камень» Дж. К. Роулинг",
          },
        ],
      },
      {
        id: uuidv4(),
        name: "Театр",
        number: 4,
        yearStart: 1999,
        yearEnd: 2004,
        events: [
          {
            year: 1999,
            content:
              "премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона",
          },
          {
            year: 2000,
            content: "возобновлено издание журнала «Театр».",
          },
          {
            year: 2002,
            content:
              "премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон",
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
              "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
          },
          {
            year: 2016,
            content:
              "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
          },
          {
            year: 2017,
            content:
              "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
          },
          {
            year: 2018,
            content:
              "Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца",
          },
          {
            year: 2019,
            content:
              "#Google объявил о создании 53-кубитного квантового компьютера.",
          },
          {
            year: 2020,
            content:
              "Корабль Crew Dragon вернулс на Землю из первого пилотируемого полёта",
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
      {activePeriod && (
        <SwiperSlider
          events={activePeriod.events}
          activePeriodName={activePeriod.name}
        />
      )}
    </div>
  );
};

export default TimePeriodBlock;
