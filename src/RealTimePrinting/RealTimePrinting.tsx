import { FC, memo, useCallback, useEffect, useRef, useState } from "react";

import { RealTimePrintingProps } from "./RealTimePrinting.model";
import { getRndNumber } from "./RealTimePrinting.utils";

import s from "./RealTimePrinting.module.scss";

export const RealTimePrinting: FC<RealTimePrintingProps> = memo(
  ({ text, min = 90, max = 150, isReverse = false }) => {
    const ref = useRef<any>();
    const [dynamicText, setDynamicText] = useState("");

    let count = 0;

    const myLoop = useCallback(() => {
      const msec = getRndNumber(min, max);

      ref.current = setTimeout(() => {
        clearTimeout(ref.current);
        let current = "";

        if (count < text.length - 1) {
          count++;

          let reverseCount = 0;
          if (isReverse) {
            if (count % 4) {
              reverseCount = count;
            } else {
              reverseCount = count - getRndNumber(3, 1);
            }
          } else {
            reverseCount = count;
          }

          current = text.slice(0, reverseCount - text.length);
          setDynamicText(current);
          myLoop();
        } else {
          current = text.slice(0, count + 1);
          setDynamicText(current);
        }
      }, msec);
    }, []);

    useEffect(() => {
      myLoop();
    }, []);

    return (
      <div className={s.container}>
        {dynamicText}
        <span>|</span>
      </div>
    );
  }
);
