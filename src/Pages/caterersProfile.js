import React , { useState }  from "react";
import {Multiselect} from "multiselect-react-dropdown";


const CatererProfile = () => {
const data = [
    {CateringType : 'Delivery' ,id : 1},
    {CateringType : 'Take Away' ,id : 2},
    {CateringType : 'Dining' ,id : 3}
]

const fileSelectedHandler =  event => {
    console.log(event.target.files[0])
}

const [cateringoptions] = useState(data)
    return(
        <div className="profile">
            <form>
                <input type="file" onChange={fileSelectedHandler}/>
                <input type="email" />
                <input type="text" />
                <input type="text" />
           
                <div className="select">
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                </div>
            </form>
        </div>
    );
}

export default CatererProfile;