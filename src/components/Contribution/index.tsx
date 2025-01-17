import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import QueueAnim from 'rc-queue-anim';
import Member from './components/Member';
import styles from './index.module.scss';

const Contribution = () => {
  const contributions = [
    {
      id: '1',
      avatar: 'https://github.com/jwSmlion.png',
      name: 'jwSmlion',
    },
  ]

  return (
    <QueueAnim
      type='bottom'
      className={styles.row}>
      {contributions.map(item => (
        <div key={item.id} className={clsx(styles.team__item, 'col col--2')}>
          <Member {...item} />
        </div>
      ))}
    </QueueAnim>
  )
}

export default Contribution
