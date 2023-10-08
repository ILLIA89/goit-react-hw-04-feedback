import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  // базовий стан наданий в дз
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // привязка контексту стану для подальшої зміни стану
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };
  //Зміна стану

  countOptions = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  // Підрахунок суми відгуків
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // обчислення відсотка позитивних відгуків на основі даних, збережених в об'єкті стану
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((100 / (good + neutral + bad)) * good) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <section className={css.container}>
        <div className={css.section_div}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onCountOptions={this.countOptions}
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
  }
}
