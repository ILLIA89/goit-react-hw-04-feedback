import React from 'react';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <p className={css.statistics_good}>
        Good:
        <span className={css.span_good}>{good}</span>
      </p>
      <p className={css.statistics_neutral}>
        Neutral:
        <span className={css.span_neutral}>{neutral}</span>
      </p>
      <p className={css.statistics_bad}>
        Bad:
        <span className={css.span_bad}>{bad}</span>
      </p>
      <p className={css.statistics_total}>
        Total:
        <span className={css.span_total}>{total}</span>
      </p>
      <p className={css.statistics_featback}>
        Positive feedback:
        <span className={css.span_featback}>{positivePercentage} %</span>
      </p>
    </div>
  );
};
