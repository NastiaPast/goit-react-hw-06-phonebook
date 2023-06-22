import React from 'react';
import { useDispatch} from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import PropTypes from 'prop-types';
import { Label, Input, Container } from './Filter.styled';

const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <Label>
        Find contacts by name
        <Container>
          <Input
            type="text"
            name="filter"
            value={value}
            onChange={handleChange}
          />
        </Container>
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};
export default Filter;
