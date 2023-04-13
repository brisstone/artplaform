import React from "react";
import { Box } from "@chakra-ui/react";
import _ from 'lodash';

const PriceRangeSlider: React.FC<{
  value?: number;
  onChange?: (e: any) => any;
  min?: number;
  max?: number;
  step?: number;
  format?: (val: number) => any;
}> = ({
  value=0, onChange,
  min=0, max=10000, step=10,
  format=(v) => v
}) => {
  const [val, setVal] = React.useState(0)

  const handleChange = (e: any) => {
    setVal(e.target.value)
    _.debounce(
      () => onChange?.(e),
      300
    )()
  }

  const percent = React.useMemo(() => (value * 100) / max, [value, max])

  React.useEffect(() => {
    if (val !== value) setVal(value)
  }, [value])

  return (
    <div className="wrapper">
      <Box as="input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={handleChange}
        _before={{
          content: '" "',
          background: "url('/slider-filled-bg.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: percent < 50 ? `58%` : '65%',
          backgroundSize: 'contain',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: `${percent - 1}%`,
        }}
        _after={{
          display: (val > 0 && val < max) ? 'flex' : 'none',
          content: `"${format(value)}"`,
          position: 'absolute',
          bottom: '100%',
          left: `${percent - 15}%`,
          background: '#444',
          borderRadius: 16,
          padding: '6px 8px',
          fontSize: 11,
          color: 'white'
        }}
      />
    </div>
  );
}

export default PriceRangeSlider;
