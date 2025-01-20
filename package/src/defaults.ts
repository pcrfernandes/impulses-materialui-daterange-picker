/* eslint-disable import/prefer-default-export */

import {
  addDays,
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfYear,
  endOfYear,
  addYears,
} from 'date-fns';

// eslint-disable-next-line no-unused-vars
import { DefinedRange } from './types';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  {
    label: 'Esta semana',
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: 'Semana passada',
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1)),
  },
  {
    label: 'Últimos 30 dias',
    startDate: addDays(date, -30),
    endDate: date,
  },
  {
    label: 'Este mês',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: 'Mês passado',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
  {
    label: 'Este ano',
    startDate: startOfYear(date),
    endDate: endOfYear(date),
  },
  {
    label: 'Ano passado',
    startDate: startOfYear(addYears(date, -1)),
    endDate: endOfYear(addYears(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
