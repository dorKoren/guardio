import { Link } from 'react-router-dom';
import classes from './style.module.css';

interface ItemProps {
  id: number;
  name: string;
  breachDate: string;
  logoPath: string;
}

const Item = ({ name, breachDate, logoPath, id }: ItemProps) => (
  <Link className={classes.item} to={`/${id}`}>
    <img className={classes.icon} src={logoPath} alt="item logo" />
    <div className={classes.content}>
      <span>Name: {name}</span>
      <span>Breah Date: {breachDate}</span>
    </div>
  </Link>
);

export default Item;
