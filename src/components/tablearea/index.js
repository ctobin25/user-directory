import React from 'react';
import PageHeader from '../PageHeader';
import SearchBar from '../SearchBar';
import TableData from '../TableData';
import TableHeader from '../TableHeader';
import getEmployeeName from "../../util/API";



export default class TableArea extends React.Component {


    state = {
        search: "name",
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
        getEmployeeName()
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



    searchEmployee = () => [
        getEmployeeName()
            .then((response) => {

                console.log(response);

                let filter = this.state.search;

                let filteredList = response.data.results.filter(item => {
                    
                    let values = Object.values(item.name.first)
                        .join("")
                        .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });

                this.setState(
                    {
                        employees: filteredList
                    }
                )

            })
            .catch((err) => {
                console.log(err);
            })
    ]




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

                <PageHeader />

                <SearchBar
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />

                {/* <TableHeader /> */}
                <TableHeader SortByName={this.SortByName} />
                <TableData
                    employees={this.state.employees}
                />

            </div>
        );
    }

}