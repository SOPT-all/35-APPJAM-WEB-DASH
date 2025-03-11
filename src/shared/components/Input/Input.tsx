import clsx from 'clsx';
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from 'react';
import * as style from '@/shared/components/Input/input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isSearch?: boolean;
}

const Input = (
  { isError, isSearch = false, className, value, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isActive = isFocused && !isError;

  return (
    <input
      ref={ref}
      type="text"
      className={clsx(
        className,
        style.inputStyle({
          isActive,
          isError,
          isSearch,
        })
      )}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      {...props}
      aria-invalid={isError ? 'true' : 'false'}
    />
  );
};

export default forwardRef(Input);
