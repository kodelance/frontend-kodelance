import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, substract } from '../../application/store/slice';
import { getTest } from '../../infrastructure/api';

function Counter() {
  const number = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  getTest()
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <h1>{number}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(add())}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(substract())}
      >
        -
      </Button>
    </>
  );
}

export default Counter;
