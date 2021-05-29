import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NAME_CATEGORY, FOLLOWERS_CATEGORY } from '../../utils/Constants';
import { IsMobileContext } from '../../is-mobile-context/IsMobileContext';

const useStyles = makeStyles((theme) => ({
  formControl: { width: (isMobile) => (isMobile ? '70px' : '100px') },
  inputLabel: {
    color: 'white',
    width: '100%',
    fontSize: '20px',
    '&.Mui-focused': { color: 'white' },
  },
  select: { height: '40px', color: 'white' },
}));

export const SortSelectButton = ({ setSortCategory }) => {
  const isMobile = useContext(IsMobileContext);
  const classes = useStyles(isMobile);

  const handleChange = (event) => {
    setSortCategory(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputLabel}>Sort</InputLabel>
      <Select className={classes.select} native onChange={handleChange}>
        <option style={{ color: 'black' }} aria-label='None' value='' />
        <option style={{ color: 'black' }} value={NAME_CATEGORY}>
          {NAME_CATEGORY}
        </option>
        <option style={{ color: 'black' }} value={FOLLOWERS_CATEGORY}>
          {FOLLOWERS_CATEGORY}
        </option>
      </Select>
    </FormControl>
  );
};
