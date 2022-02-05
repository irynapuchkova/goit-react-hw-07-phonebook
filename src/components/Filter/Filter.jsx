import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import selectors from "../../redux/contacts/contacts-selectors";
import { filter } from "../../redux/contacts/contacts-reducer";

import { Title, Input, Wrapper } from "./Filter.styled";

function Filter() {
  const value = useSelector(selectors.filter);
  const dispatch = useDispatch();

  const handleFilter = ({ currentTarget: { value } }) => {
    dispatch(filter(value));
  };

  return (
    <Wrapper>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        placeholder="Filter"
        value={value}
        onChange={handleFilter}
      />
    </Wrapper>
  );
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  handleFilter: PropTypes.func,
};
