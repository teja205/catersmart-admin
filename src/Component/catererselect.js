import React, { Component } from 'react';
import axios from 'axios'
 
import Select from 'react-select'

export default class catererselect extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          dropDownOpt : [],
          id: "",
          email: ''
        }
      }
     
     async renderData(){
        const API = await axios.get('https://stg-backend.catersmart.in/api/caterer_option')
        const serverResponse = API.data.result
        const cateringTypeResponse = API.data.result.cateringtype
        const corporarteEventResponse = API.data.result.corporateEvent
        const cuisineResponse = API.data.result.cuisine
        const dietaryResponse = API.data.result.dietary
        const dishResponse = API.data.result.dish
        const vendorResponse = API.data.result.vendortype
        const logisticResponse = API.data.result.logistic

        console.log(serverResponse,"response")
        console.log(cateringTypeResponse,"cateringresponse")
        console.log(corporarteEventResponse,"eventresponse")
        console.log(cuisineResponse,"cuisineresponse")
        console.log(dietaryResponse,"dietaryResponse")
        console.log(dishResponse,"dietaryResponse")
        console.log(logisticResponse,"logisticResponse")
     
        const cateringType = cateringTypeResponse.map((response) => ({
          "value" : response._id,
          "label" : response.filterName
        }))
        const  corporateEvent = corporarteEventResponse.map((response) => ({
            "value" : response._id,
            "label" : response.filterName
          }))
        const  cuisines = cuisineResponse.map((response) => ({
            "value" : response._id,
            "label" : response.filterName
          }))
        const  dietary = dietaryResponse.map((response) => ({
            "value" : response._id,
            "label" : response.filterName
          }))  
        const  dish = dishResponse.map((response) => ({
            "value" : response._id,
            "label" : response.filterName
          })) 
        const  vendortype= vendorResponse.map((response) => ({
            "value" : response._id,
            "label" : response.filterName
          })) 
        const  logistictype= logisticResponse.map((response) => ({
            "value" : response._id,
            "label" : response.name
          })) 
          
          
         

     
        this.setState(
          {
            cateringTypeoptions: cateringType
          }
        )

        this.setState(
            {
              corporateEventoptions: corporateEvent
            }
          )
          this.setState(
            {
              cuisineoptions: cuisines
            }
          )
          this.setState(
            {
              dietaryoptions: dietary
            }
          )
          this.setState(
            {
              dishoptions: dish
            }
          )
          this.setState(
            {
              vendoroptions: vendortype
            }
          )
          this.setState(
            {
              logisticoptions: logistictype
            }
          )
      }
     
      onChange(event){
        this.props.func();
       this.setState(
         {
           id: event.value, 
           options: event.label
          },
        )
      }
     
      componentDidMount(){
          this.renderData()
      }


      styles = {
        option: (provided, state) => ({
          ...provided,
          fontWeight: state.isSelected ? "bold" : "normal",
          color: state.isSelected ? 'red' : 'blue',
          borderBottom: '1px dotted pink',
          border: "none",
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: state.data.color,
          fontSize: state.selectProps.myFontSize
        })
      };
     
      render() {
        return (
          <div className="select">
            <Select 
               options={this.state.cateringTypeoptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               placeholder="Select Catering Type"
               isMulti
            />
            <Select 
               options={this.state.corporateEventoptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               styles={this.styles}
               placeholder="Select Event Type"
               isMulti
            />
            <Select 
               options={this.state.cuisineoptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               placeholder="Select Cuisines"
               isMulti
            />
            <Select 
               options={this.state.dietaryoptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               placeholder="Select Dietary"
               isMulti
            />
            <Select 
               options={this.state.dishoptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               placeholder="Select Dish"
               isMulti
            />
            <Select 
               options={this.state.vendoroptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               placeholder="Select Vendor Type"
               isMulti
            />
            <Select 
               options={this.state.logisticoptions} 
               onChange={this.onChange.bind(this)}
               className = "selectcontainer"
               placeholder="Select Logistic Type"
               isMulti
            />
          </div>
        )
      }
}


//dietary
//dish
//vendortype
//logistic
