import { InputHTMLAttributes, useCallback, useState } from 'react';

import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked = false,
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = useCallback(() => {
    const status = !checked;
    setChecked(status);

    !!onCheck && onCheck(status);
  }, [checked, onCheck]);

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
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

export default Checkbox;
