import React from 'react';
import { Question as QuestionType } from '../utils/parser';

type QuestionProps = {
  question: QuestionType;
  index: number;
  children: React.ReactNode;
};

function Question({ question, index, children }: QuestionProps) {
  const onChangeQuestion = (e: React.ChangeEvent<HTMLDivElement>) => {
    if (e.target.textContent !== null) {
      question.question = e.target.textContent;
    }
  };

  const onChangeAnswer = (e: React.ChangeEvent<HTMLDivElement>) => {
    if (e.target.textContent !== null) {
      question.answer = e.target.textContent;
    }
  };

  return (
    <div>
      <h3>Question {index + 1}</h3>
      <div className="p-1 mb-2" placeholder="Generated Context">
        {question.context}
        {!question.answer && (
          <p className="text-slate-300">Generated Context</p>
        )}
      </div>
      <div
        className="p-1 mb-2 border rounded-md border-slate-400"
        onInput={onChangeQuestion}
        placeholder="Generated Question"
        contentEditable={true}
      >
        {question.question}
        {!question && <p className="text-slate-300">Generated Question</p>}
      </div>
      <div
        className="p-1 mb-2 border rounded-md border-slate-400"
        onChange={onChangeAnswer}
        placeholder="Generated Answer"
        contentEditable={true}
      >
        {question.answer}
        {!question.answer && <p className="text-slate-300">Generated Answer</p>}
      </div>
      {children}
    </div>
  );
}

export default Question;
