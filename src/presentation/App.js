import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add, substract } from '../application/store/reducer';

function App() {
  const number = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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

export default App;
