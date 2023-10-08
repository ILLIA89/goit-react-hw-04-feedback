import React from 'react';
import css from './FeedbackOptions.module.css';
// імпорт clsx  бібліотеки
import clsx from 'clsx';

export const FeedbackOptions = ({ options, onCountOptions }) => {
  return (
    <div className={css.button_div}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          // використання clsx  бібліотеки
          className={clsx(css.btn, css[option])}
          onClick={() => {
            onCountOptions(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
