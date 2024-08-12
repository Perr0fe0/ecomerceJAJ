/* eslint-disable linebreak-style */
import React from 'react';
import FilterOrigin from './filter-origin';

type FiltersControlsCategorysProps = {
  setFilterOrigin: (origin: string) => void
}
const FiltersControlsCategorys = (props: FiltersControlsCategorysProps) => {
  const {setFilterOrigin} = props;
  return (
    <div className='sm:w-[350px] sm:mt-5 p-6'>
      <FilterOrigin setFilterOrigin={setFilterOrigin}/>
    </div>
  );
};

export default FiltersControlsCategorys;
