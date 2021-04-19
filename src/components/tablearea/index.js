import React from 'react';
//import PageHeader from '../PageHeader/index';
import SearchBar from '../searchbar/index.js';
import TableData from '../tabledata/index';
import TableHeader from '../tableheader/index';
import getEmployeeName from "../../util/API";
import PageHeaderComponent from '../pageheader/pageHeaderComponent';
import API from "../../util/API";




export default class TableArea extends React.Component {


    state = {
        search: "",
        employees: []
    };
    
    componentDidMount = () => {
        this.loadEmployees();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                [name]: value
            }
        )
    }

    loadEmployees = () => [
        API.searchEmployee() 
            .then((response) => {
                console.log(response);
                this.setState(
                    {
                    
                        employees: response.data.results
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    ]



    // searchEmployee = () => [
    //     getEmployeeName()
    //         .then((response) => {

    //             console.log(response);

    //             let filter = this.state.search;

    //             let filteredList = response.data.results.filter(item => {
                    
    //                 let values = Object.values(item.name.first)
    //                     .join("")
    //                     .toLowerCase();
    //                 return values.indexOf(filter.toLowerCase()) !== -1;
    //             });

    //             this.setState(
    //                 {
    //                     employees: filteredList
    //                 }
    //             )

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // ]




    handleInputSubmit = (event) => {
        event.preventDefault();
      

        this.searchEmployee();

    }


    SortByName = (e) => {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked!');
        }
    }



    render() {
        return (
            <div className="wrapper" >

<PageHeaderComponent /> 



                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />


                <TableHeader SortByName={this.SortByName} />
                <TableData
                    employees={this.state.employees}
                />

            </div>
        );
    }

}