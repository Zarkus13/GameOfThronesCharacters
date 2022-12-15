import { PayloadAction } from '@reduxjs/toolkit';

export const FakePayloadAction = <T>(type: string, payload: T): PayloadAction<T> =>
  ({
    type,
    payload
  });