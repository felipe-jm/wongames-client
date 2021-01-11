import { InputHTMLAttributes, useCallback, useState } from 'react';

import * as S from './styles';

export type CheckboxProps = {
  onCheck?: (status: boolean) => void;
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white'
}) => {
  const [checked, setChecked] = useState(false);

  const onChange = useCallback(() => {
    const status = !checked;
    setChecked(status);

    if (onCheck) {
      onCheck(status);
    }
  }, [checked, onCheck]);

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
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
