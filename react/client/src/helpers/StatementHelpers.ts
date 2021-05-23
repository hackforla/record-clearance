import { IStepState } from 'contexts/FormStateProps';

/**
 * @param {IStepState} formState
 * @returns {String}
 */
export function GenerateIntroduction(formState: IStepState): String {
  const { introduction } = formState;

  const firstSentence =
    'Thank you so much for taking the time to read my personal statement.';

  const nameSentence =
    introduction.fullName !== '' && introduction.age !== ''
      ? `My name is ${introduction.fullName}, and I am ${introduction.age} years old.`
      : '';

  const veteranSentance = introduction.isVeteran === 'Yes'
    ? 'I am also a proud veteran of the United States Armed Forces'
    : '';

  return `${firstSentence} ${nameSentence} ${veteranSentance}`;
}
