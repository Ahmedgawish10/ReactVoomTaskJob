import React, { useState, useCallback } from 'react';
import './index.css';
import JsonData from "./assets/data.json";
import FieldRange from './common/FieldRange';

const FilterComp = ({ setCurrentPoly, setAreaPoly }: any) => {
    const [area, setArea] = useState<number>(500);
    const [price, setPrice] = useState<number>(90000);
    const [selectedUnitType, setSelectedUnitType] = useState<string | null>(null);
    const [toggleFilterVisible, setToggleFilterVisible] = useState(true);



    // when user onChange on  the input in  for area set the value
    const handleChangeArea = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newArea = parseInt(event.target.value);
        setArea(newArea);
        setAreaPoly(newArea);
    }, [setAreaPoly]);
    // when user onChange on  the input in  for price set the value
    const handleChangePrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(parseFloat(event.target.value));
    }, []);
   // when user clicks and leave the input in pc for area for high performance and less rerender comp
    const handleOnClickArea = useCallback(() => {
        const matchingData = JsonData.filter(item => item?.area == area);
        setCurrentPoly(matchingData);
    }, [area, setCurrentPoly]);
   // when user clicks and leave the input in pc for price for high performance and less rerender comp
    const handleOnClickPrice = useCallback(() => {
        const matchingData = JsonData.filter(item => item?.price === price);
        setCurrentPoly(matchingData);
    }, [price, setCurrentPoly]);
     // when user click on type (commeriacl or clicnial )
    const handleUnitTypeClick = useCallback((unitType: string) => {
        const matchingData = JsonData.filter(item => item?.unitType === unitType);
        setSelectedUnitType(unitType);
        setCurrentPoly(matchingData);
        console.log(selectedUnitType);
        
    }, [setCurrentPoly]);
   // when user touch and leave the input in mobile for area 
    const handleOnTouchEndArea = useCallback(() => {
        const matchingData = JsonData.filter(item => item?.area === area);
        setCurrentPoly(matchingData);
    }, [area, setCurrentPoly]);
    // when user touch and leave the input in mobile for Price 
    const handleOnTouchEndOrice = useCallback(() => {
        const matchingData = JsonData.filter(item => item?.price === price);
        setCurrentPoly(matchingData);
    }, [price, setCurrentPoly]);
   // toggel visible filter
    const handleToggleFilter = useCallback(() => {
        setToggleFilterVisible(prevVisible => !prevVisible);
        
    }, [toggleFilterVisible]);

   
    return (
        <>
        <div className='btn-filter'onClick={handleToggleFilter}>{toggleFilterVisible?"HideFilter":"ShowFilter"}</div>
            <div className={`filter ${toggleFilterVisible?"show-filter":"hide-filter"}`}>
                <div className="header-filter">
                    <div className="header-type">Type*</div>
                    <div className="header-availability">Availability*</div>
                </div>
                <div className="unit-type">
                <div className="com" onClick={() => handleUnitTypeClick('commercial')}>
                    Commercial
                </div>
                <div className="com" onClick={() => handleUnitTypeClick('administrative')}>
                    Administrative
                </div>
                <div className="com" onClick={() => handleUnitTypeClick('clinical')}>
                    Clinical
                </div>
                </div>
                <div className="range-container"> 
                 <FieldRange type="range" step="50"  min="100" max="500" name="Area" value={area} 
                 OnChange={handleChangeArea} OnClick={handleOnClickArea} OnTouchEnd={handleOnTouchEndArea} />
                <FieldRange type="range"  min="1000" max="90000" name="Price" value={price}
                     OnChange={handleChangePrice} OnClick={handleOnClickPrice} OnTouchEnd={handleOnTouchEndOrice}  />
                </div>
            </div>
        </>

    );
};

export default FilterComp;
