import { useParams } from 'react-router-dom';
import classes from './style.module.css';

const SingleItem = () => {
  const { itemId } = useParams();

  const items = localStorage.getItem('items');

  const parsedItems = items && JSON.parse(items);

  if (!parsedItems || !itemId) return <h1>THERE IS ERROR...</h1>;

  const item = parsedItems[+itemId];

  return (
    <div className={classes.itemWrapper}>
      <div className={classes.item}>
        <img className={classes.icon} src={item['LogoPath']} alt="icon logo" />
        <div className={classes.dataClasses}>
          <h2>data classes: </h2>
          <ul>
            {item['DataClasses'].map((dataClass: string, index: number) => (
              <li key={index}>{dataClass}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
