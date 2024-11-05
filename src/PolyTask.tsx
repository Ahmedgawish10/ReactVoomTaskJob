import { useRef, useState, useCallback } from 'react';
import image from './assets/0-floor.png';
import JsonData from "./assets/data.json";
import InterfaceDataPoly from "../src/type/types";
import FilterComp from './FilterComp';
import SvgComp from './common/SvgComp';

const PolyTask = () => {
  const [currentPoly, setCurrentPoly] = useState<InterfaceDataPoly[]>([]);
  const [areaPoly, setAreaPoly] = useState("");
  const previousPolygonRef = useRef<SVGPolygonElement | null>(null);
  const [toggleDataVisible, setToggleDataVisible] = useState(true);

  const handlePolyClick = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
    const target = event.target as SVGPolygonElement;
    if (target.tagName === 'polygon') {
      setToggleDataVisible(true);
      
      const areaCode = target.getAttribute('data-code');
      const getArea = target.getAttribute('points');
      
      if (previousPolygonRef.current) {
        previousPolygonRef.current.setAttribute('fill', '#3271cc');
       }
       target.setAttribute('fill', '#1fcf1f');
       previousPolygonRef.current = target;

      if (getArea){ setAreaPoly(getArea.slice(0, 4));}
      
      if (areaCode) {
        const matchingData = JsonData.filter(item => item.code === +areaCode);
        setCurrentPoly(matchingData);
      }
    }
  }, []);

  const handleToggleData = useCallback(() => {
    setToggleDataVisible(prev => !prev);
  }, []);

  return (
    <div className='task-parent'>
        <div className='btn-data'onClick={handleToggleData}>{toggleDataVisible?"HideData":"ShowData"}</div>
        <div className="filter-component">
        <FilterComp setCurrentPoly={setCurrentPoly}setAreaPoly={setAreaPoly} />
     </div>

      <div className={`box-data  ${toggleDataVisible?"show-data":"hide-data"}`}>
        <p className='inital-msg' style={{ padding: "25px" }}>
          {currentPoly.length <= 0 ? "Here the data will displayed just click on any poly or fillter  to know more details and if it is available or not! 😊 " : ""}
        </p>

        <div className={currentPoly.length>0?"data-poly":""}>
        {currentPoly.map((ele, index) => (
          <div key={index}>
          <div className='poly-box'>
          <div className="box1 unit">
            <p>Unit: {ele?.unit}</p>
            <p className={`${ele.status == "available" ? "opend" : "closed"}`}>{ele.status}</p>
          </div>
          <div className="box2 unit-type">
            {ele.unitType && <p>Unit Type: </p>}
            {ele.unitType && <p>{ele.unitType}</p>}
          </div>
          <div className="box3 area">
            {<p>Area Total: </p>}
            {<p>{areaPoly} M<sup>2</sup> </p>}
          </div>
          <div className="box4 code">
            <p>Code: </p>
            <p>{ele?.code}</p>
          </div>
          <div className="box5 price">
            <p>Price: </p>
            <p>{ele.price} EGP</p>
          </div>
          <button className='btn-callback'>CallBack</button>

        </div>
            <div style={{width:"100%",height:"10px",background:"orange",marginTop:"5px"}}></div>
        </div>
          

        ))}
        </div>
  
      </div>
      <div className='box-img'>
        <img style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: 'nitail',

          objectFit: 'cover'
        }} src={image} />
      <SvgComp handlePolyClick={handlePolyClick}/> 
      </div>
    </div>
  );
};

export default PolyTask;





