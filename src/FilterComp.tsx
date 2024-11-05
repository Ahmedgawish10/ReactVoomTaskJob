import React, { useState, useCallback } from 'react';
import './index.css';
import JsonData from "./assets/data.json";
import FieldRange from './common/FieldRange';

const FilterComp = ({ setCurrentPoly, setAreaPoly }: any) => {
    const [area, setArea] = useState<number>(500);
    const [price, setPrice] = useState<number>(90000);
    const [selectedUnitType, setSelectedUnitType] = useState<string | null>(null);
    const [toggleFilterVisible, setToggleFilterVisible] = useState(true);

    const handleChangeArea = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newArea = parseInt(event.target.value);
        setArea(newArea);
        setAreaPoly(newArea);
    }, [setAreaPoly]);

    const handleChangePrice = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(parseFloat(event.target.value));
    }, []);

    const handleOnClickLeaveArea = useCallback(() => {
        const matchingData = JsonData.filter(item => item?.area === area);
        setCurrentPoly(matchingData);
    }, [area, setCurrentPoly]);

    const handleOnClickLeavePrice = useCallback(() => {
        const matchingData = JsonData.filter(item => item?.price === price);
        setCurrentPoly(matchingData);
    }, [price, setCurrentPoly]);

    const handleUnitTypeClick = useCallback((unitType: string) => {
        const matchingData = JsonData.filter(item => item?.unitType === unitType);
        setSelectedUnitType(unitType);
        setCurrentPoly(matchingData);
        console.log(selectedUnitType);

    }, [setCurrentPoly]);

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
                    <FieldRange type="range" step="50"  min="100" max="500" name="Area" value={area} onChange={handleChangeArea} OnClickLeave={handleOnClickLeaveArea} />
                    <FieldRange type="range"  min="1000" max="90000" name="Price" value={price} onChange={handleChangePrice} OnClickLeave={handleOnClickLeavePrice} />
                </div>
            </div>
        </>

    );
};

export default FilterComp;
