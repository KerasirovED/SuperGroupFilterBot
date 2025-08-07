import 'grammy';
import { TFunction } from 'i18next';

declare module 'grammy' {
  interface Context {
    t: TFunction;
  }
}