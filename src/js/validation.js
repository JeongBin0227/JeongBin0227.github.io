import { MAX_LENGTH } from './constants.js';
import { MAX_LENGTH,OPERATOR } from './constants.js';

export const INVALID_LENGTH = `숫자는 ${MAX_LENGTH}자리까지만 입력 가능합니다!`;
export const NOT_ENTER_NUMBER = `숫자를 먼저 입력해주세요.`;

export const isOverMaxNumber = (operators) => {
  if (operators.length > MAX_LENGTH - 1) {
    alert(INVALID_LENGTH);
    return true;
  }

  return false;
};

export const isOverlapOperator = (num2,operator,clikckOperator) => {
  if ((!num2 && operator) || (!num2 && clikckOperator===OPERATOR.EQUAL)) {
    alert(NOT_OVERLAP_NUMBER);
    return true;
  }

  return false;
};

