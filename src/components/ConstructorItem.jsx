import React from 'react';
import {
  CurrencyIcon,
  DeleteIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerConstructor.module.css';
import substract from '../images/Subtract.svg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ConstructorItemWrapper from './ConstructorItemWrapper';
import { REMOVE_ITEM } from '../services/actions/constants';
import { useDrag, useDrop } from 'react-dnd';

const ConstructorItem = ({ img, id, index, moveElement, data, place }) => {
  const dispatch = useDispatch();
  console.log(data);

  const [{ handlerId }, drop] = useDrop({
    accept: 'item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveElement(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: () => {
      return { id, index };
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const ref = React.useRef(null);

  drag(drop(ref));

  let spot;
  let icon;
  let dots;
  if (place === 'top') {
    spot = ' (верх)';
    icon = <img src={substract} alt="замочек" />;
    dots = null;
  } else if (place === 'bottom') {
    spot = ' (низ)';
    icon = <img src={substract} alt="замочек" />;
    dots = null;
  } else {
    icon = <DeleteIcon type="primary" />;
    dots = <img src={img} alt="Иконка переноса" className={styles.dots} />;
  }

  if (data) {
    return (
      <>
        <div
          className={styles.draggableItemContainer}
          style={{
            opacity: isDragging ? 0.5 : 1,
          }}
          ref={ref}
          id={id}
          data-handler-id={handlerId}
        >
          {dots}
          <ConstructorItemWrapper place={place} data={data.uniqueId}>
            <div className={styles.itemContainer + ' pl-3'}>
              <img
                src={data.image}
                className={styles.itemImage}
                alt={data.name}
              />
              <p
                className={
                  styles.ingredientName + ' pl-5 text text_type_main-default'
                }
              >
                {data.name}
                <br />
                {spot}
              </p>
            </div>
            <div className={styles.itemContainer + ' pr-5'}>
              <p className="text text_type_digits-default pr-1 pl-5">
                {data.price}
              </p>
              <CurrencyIcon type="primary" />
              <div
                className={styles.lock + ' ml-5'}
                onClick={() => {
                  if (place !== 'top' && place !== 'bottom') {
                    dispatch({ type: REMOVE_ITEM, id: data.uniqueId });
                  }
                }}
              >
                {icon}
              </div>
            </div>
          </ConstructorItemWrapper>
        </div>
      </>
    );
  }
};

ConstructorItem.propTypes = {
  data: PropTypes.object,
  place: PropTypes.string,
};

export default ConstructorItem;
