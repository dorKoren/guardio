import { FC } from 'react';
import classes from './style.module.css';

const Wrapper: FC = props => (
  <div className={classes.wrapper}>{props.children}</div>
);

export default Wrapper;
