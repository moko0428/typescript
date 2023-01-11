import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { recoilCounterState } from "../states/recoilCounterState";

interface CommonState {
  value: number;
}

function RecoilCounter() {
  const [recoilCounter, setRecoilCounter] = useRecoilState(recoilCounterState);

  const defaultRecoilCounterState: CommonState = { ...recoilCounter };

  const onIncrease = useCallback(() => {
    defaultRecoilCounterState.value = recoilCounter.value + 1;
    setRecoilCounter(defaultRecoilCounterState);
  }, [recoilCounter]);
  const onDecrease = useCallback(() => {
    defaultRecoilCounterState.value = recoilCounter.value - 1;
    setRecoilCounter(defaultRecoilCounterState);
  }, [recoilCounter]);
  return (
    <>
      <div>
        <h1>{recoilCounter.value}</h1>
        <div>
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
        </div>
      </div>
    </>
  );
}
export default RecoilCounter;
