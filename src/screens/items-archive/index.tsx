import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { POKEMON, URL, MAX_OFFSET } from '../../constants';
import Item from '../../ui/item';
import classes from './style.module.css';

interface ItemType {
  [key: string]: string | boolean | number | string[];
}

const ItemsArchive = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [items, setItems] = useState<ItemType[]>(
    localStorage.getItem('items')
      ? (JSON.parse(localStorage.getItem('items')!) as ItemType[])
      : []
  );

  const [offset, setOffset] = useState(
    localStorage.getItem('offset') ? +localStorage.getItem('offset')! : 1
  );

  const totalItems = useRef(0);

  useEffect(() => {
    inView && setOffset(prevOffset => prevOffset + 1);
  }, [inView]);

  useEffect(() => {
    offset < MAX_OFFSET && fetchData();
  }, [offset]);

  const fetchData = async () => {
    const options = {
      headers: { 'X-Best-Pokemon': POKEMON },
    };

    try {
      const response = await fetch(`${URL}?offset=${offset}`, options);

      const data = await response.json();

      if (data.error) throw Error(`ERROR: ${data.error}`);

      const updateItems = [...items, ...data.items];

      localStorage.setItem('offset', offset.toString());
      localStorage.setItem('items', JSON.stringify(updateItems));

      setItems(updateItems);

      totalItems.current = data.total;
    } catch (error) {
      console.log(error);
    }
  };

  if (!items.length)
    return (
      <div className={`${classes.loader} ${classes.loaderInitial}`}>
        {<h1>LOADING...</h1>}
      </div>
    );

  return (
    <>
      <div className={classes.items}>
        {items.map((item, index) => (
          <Item
            key={index}
            id={index}
            name={item['Name'] as string}
            breachDate={item['BreachDate'] as string}
            logoPath={item['LogoPath'] as string}
          />
        ))}
      </div>

      <div className={classes.loader} ref={ref}>
        {inView && <h1>LOADING...</h1>}
      </div>
    </>
  );
};

export default ItemsArchive;
