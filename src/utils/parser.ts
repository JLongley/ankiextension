import { DOMParser } from 'xmldom';

export interface Question {
  question: string;
  answer: string;
  context: string;
}

interface ParsedMarkup {
  summary: string;
  questions: Question[];
}

export function parseMarkup(markup: string): ParsedMarkup {
  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, 'text/xml');
  const summaryElement = doc.getElementsByTagName('SUMMARY')[0];
  const summary = summaryElement.textContent!.trim();

  const questionElements = doc.getElementsByTagName('Q');
  const answerElements = doc.getElementsByTagName('A');
  const contextElements = doc.getElementsByTagName('C');

  const questions: Question[] = [];

  for (let i = 0; i < questionElements.length; i++) {
    const question = questionElements[i].textContent!.trim();
    const answer = answerElements[i].textContent!.trim();
    const context = contextElements[i].textContent!.trim();

    questions.push({ question, answer, context });
  }

  return { summary, questions };
}
