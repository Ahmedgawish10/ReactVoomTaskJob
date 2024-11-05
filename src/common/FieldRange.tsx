import '../../src/index.css';
import { FieldInputProps } from '../type/types';
const PriceInput = ({ type, max, min,value,name,step, OnChange,OnClick,OnTouchEnd }:FieldInputProps) => {
  return (
        <div className="range-field">
          <div style={{ display:"flex",justifyContent:"space-between",color:"white"}}>
            <span>{name}:</span>
            <span>{name=="Area"?"0.0":"LE 0:00"} - {name=="Area"?`${value?.toFixed(1)} Sq.m`:`${value?.toFixed(2)}  M`} </span>
          </div>
          <input
            type={type}
            min={min}   
            max={max}
            value={value}
            name={name}
            step={step}
            onChange={OnChange}
            onClick={OnClick}
            onTouchEnd={OnTouchEnd}
            style={{ width: '100%', marginTop: '10px',cursor:"pointer" }}
          />
      </div>
  );
};

export default PriceInput;
