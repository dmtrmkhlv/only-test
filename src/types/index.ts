export interface TimePeriod {
  id: string;
  name: string;
  number: number;
  yearStart: number;
  yearEnd: number;
  events: TimePeriodEvent[];
}
export interface TimePeriodEvent {
  year: number;
  content: string;
}
