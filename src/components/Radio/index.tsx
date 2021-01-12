import { InputHTMLAttributes, useCallback } from 'react';

import * as S from './styles';

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  onCheck?: (value?: RadioValue) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;

const Radio: React.FC<RadioProps> = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}) => {
  const onChange = useCallback(() => {
    !!onCheck && onCheck(value);
  }, [onCheck, value]);

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Radio;
