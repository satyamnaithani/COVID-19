import React, { Component } from 'react';
import { Form, FormGroup, Input, Container } from 'reactstrap';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {

        this.setState({value: event.target.value});

      }
      handleSubmit(event) {
        event.preventDefault();
        
      }
    render() {
        console.log(this.state.value)
        
        
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