'use client';

import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import React from 'react';

type NumberInputProps = Omit<InputProps, 'onChange'> & {
  icon?: React.ReactNode;
  onValueChange?: (value: string) => void;
  sensibility?: number;
  decimalPlaces?: number;
};

const stepRound = (value: number, step: number | string) => {
  return Math.round(value / +step) * +step;
};

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      icon: Icon,
      className,
      value: valueProp,
      defaultValue,
      onValueChange,
      sensibility = 0.2,
      decimalPlaces,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useControllableState<string>({
      prop: valueProp?.toString(),
      defaultProp:
        defaultValue !== undefined && decimalPlaces !== undefined
          ? (+defaultValue).toFixed(decimalPlaces)
          : defaultValue?.toString(),
      onChange: onValueChange,
    });

    const { min, max, step } = props;

    const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
      const originX = e.clientX;

      // This is a hack to make the cursor ew-resize even if any other cursor is set for a element
      const cursorStyle = document.createElement('style');
      cursorStyle.innerHTML = '*{cursor: ew-resize !important; user-select: none !important;}';
      cursorStyle.id = 'cursor-style';
      document.head.appendChild(cursorStyle);

      const onPointerMove = (e: PointerEvent) => {
        const diff = e.clientX - originX;

        let newVal = +(value ?? 0) + diff * sensibility;

        if (max !== undefined) newVal = Math.min(newVal, +max);
        if (min !== undefined) newVal = Math.max(newVal, +min);
        if (step !== undefined) newVal = stepRound(newVal, step);

        setValue(decimalPlaces ? newVal.toFixed(decimalPlaces) : newVal.toString());
      };

      const onPointerUp: EventListener = () => {
        document.removeEventListener('pointermove', onPointerMove);
        document.removeEventListener('pointerup', onPointerUp);
        document.getElementById('cursor-style')?.remove();
      };

      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);
    };

    return (
      <div className="relative flex">
        {Icon && (
          <div
            className="absolute inset-y-0 left-0 flex cursor-move items-center pl-3 hover:cursor-ew-resize"
            onPointerDown={onPointerDown}
          >
            {Icon}
          </div>
        )}
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="number"
          placeholder="Search"
          className={cn('pl-12', className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

NumberInput.displayName = 'NumberInput';

export { NumberInput };
