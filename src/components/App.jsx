// import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';
import { useState } from 'react';

export const App = () => {
  // базовий стан наданий в дз
  // defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  // привязка контексту стану для подальшої зміни стану
  // state = {
  //   good: this.props.good,
  //   neutral: this.props.neutral,
  //   bad: this.props.bad,
  // };

  // const [good, setGood] = useState({ good: 0 });
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  //Зміна стану

  const countOptions = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
    // prevState => ({
    //   [type]: prevState[type] + 1,
    // });
  };
  // Підрахунок суми відгуків
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  // обчислення відсотка позитивних відгуків на основі даних, збережених в об'єкті стану
  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback;
    return Math.round((100 / (good + neutral + bad)) * good) || 0;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <section className={css.container}>
      <div className={css.section_div}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onCountOptions={countOptions}
          />
        </Section>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </div>
    </section>
  );
};
