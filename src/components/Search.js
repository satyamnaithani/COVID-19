import React, { Component } from 'react';
import { Form, FormGroup, Input, Container } from 'reactstrap';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: null,
            isLoaded: false,
            items: []

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {

        this.setState({ value: event.target.value });

    }
    handleSubmit(event) {
        event.preventDefault();
        const url = "https://corona.lmao.ninja/v2/countries/" + this.state.value;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    }, function () {

                        const { items } = this.state;

                        alert(
                            items.country + "    Cases: " +

                            items.cases +  "    Today Cases: " +
                            items.todayCases + "    Deaths: " +
                            items.deaths + "    Today Deaths: " +
                            items.todayDeaths
                            
                            )

                    });
                },
                (error) => {
                    
                    alert("Enter a Valid Country or Check the spelling")
                }
            )



    }
    render() {
    


        return (
            <div>
                <Container>

                    <Form inline onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Input type="text" name="country" id="country" placeholder="Search By Country"
                                value={this.state.value} onChange={this.handleChange}
                            />

                        </FormGroup>
                    </Form>

                </Container>
            </div>
        );
    }
}

export default Search;
