// type for poly data on hover or other
export default interface InterfaceDataPoly {
    code: number;
    status: string;
    price: number;
    area?: number;
    unitType?: string;
    unit?:string
  };
// type for input range
 export interface FieldInputProps {
    type?: string;
    max?: string;
    min?: string;
    step?:string;
    value?: number;
    name?:string;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
    OnClickLeave?:()=>void;
}
