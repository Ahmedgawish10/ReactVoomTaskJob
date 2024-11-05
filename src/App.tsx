import PolyTask from "./PolyTask"

function App() {
  return (
    <>
    <PolyTask />
    
    </>
  )
}

export default App



// import React, { useState } from 'react';
// import PolygonFilter from './X';

// // Define the type for the polygon object
// interface Polygon {
//   points: string;
//   color: string;
//   status: string;
//   price: number;
//   unit: string;
//   area: number;
//   visible: boolean;
// }

// interface PolygonFilterProps {
//   polygons: Polygon[];
// }

// const App: React.FC<PolygonFilterProps> = ({ polygons }) => {
//   const [statusFilter, setStatusFilter] = useState<string>('all');
//   const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 30000000 });

//   const handleFilterChange = () => {
//     polygons?.forEach((polygon) => {
//       if (
//         (polygon.status === statusFilter || statusFilter === 'all') &&
//         polygon.price >= priceRange.min &&
//         polygon.price <= priceRange.max
//       ) {
//         polygon.visible = true; // Set a visible property to control rendering
//       } else {
//         polygon.visible = false;
//       }
//     });
//   };

//   return (
//     <div>
//       <select onChange={(e) => setStatusFilter(e.target.value)}>
//         <option value="all">All</option>
//         <option value="Commercial">Commercial</option>
//         <option value="Administrative">Administrative</option>
//         <option value="Clinical">Clinical</option>
//       </select>
//       <input
//         type="number"
//         placeholder="Min Price"
//         onChange={(e) => setPriceRange({ ...priceRange, min: parseFloat(e.target.value) })}
//       />
//       <input
//         type="number"
//         placeholder="Max Price"
//         onChange={(e) => setPriceRange({ ...priceRange, max: parseFloat(e.target.value) })}
//       />
//       <button onClick={handleFilterChange}>Apply Filter</button>

//       <svg width="500" height="500">
//         {polygons?.map((polygon, index) =>
//           polygon?.visible ? (
//             <polygon
//               key={index}
//               points={polygon.points}
//               fill={polygon.color}
//               data-status={polygon.status}
//               data-price={polygon.price}
//             />
//           ) : null
//         )}
//       </svg>
//     </div>
//   );
// };

// export default App;

