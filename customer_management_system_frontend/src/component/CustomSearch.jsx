import React, { useEffect, useState } from 'react'

const CustomSearch = ({filterDatas,data}) => {
    const [searchCriterion, setSearchCriterion] = useState('firstName');
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchCriterionChange = (event) => {
      setSearchCriterion(event.target.value);
      // Reset search term when changing the search criterion
      setSearchTerm(''); 
    };
  
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filterTheData=async()=>{
      const filteredData = data.filter(person =>
      person[searchCriterion]?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
      filterDatas(filteredData);
    }
    useEffect(()=>{filterTheData()},[searchTerm])
    return (
      <div className='search'>
        <select value={searchCriterion} onChange={handleSearchCriterionChange}>
            <option value="">Search By</option>
            <option value="first_name">First Name</option>
            <option value="city">City</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    );
}

export default CustomSearch