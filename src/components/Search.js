import React, { Component } from 'react';
import { Form, FormGroup, Input, Container } from 'reactstrap';

class Search extends Component {
    render() {
        return (
            <div>
                <Container>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" name="country" id="country" placeholder="Search By Country" />
                    </FormGroup>
                </Form>
                </Container>
            </div>
        );
    }
}

export default Search;