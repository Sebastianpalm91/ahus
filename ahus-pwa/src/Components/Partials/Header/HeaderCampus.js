import React, {Component} from 'react';
import { CampusContainer, Select, Option, StyledLink, Logo, SelectWrapper, Arrow } from './styles';
import axios from 'axios';
import SimpleLineIcon from 'react-simple-line-icons';


// The Header creates links that can be used to navigate
// between routes.
// class PersonList extends React.Component {
class HeaderCampus extends Component {
    state = {
        campuses: []
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/campus`)
            .then(res => {
                const campuses = res.data.campus;
                this.setState({ campuses });
                console.log(campuses);
            })
    }
    render() {
    return(
            <CampusContainer>
                <StyledLink to='/'><Logo></Logo></StyledLink>
                <SelectWrapper>
                <Select>
                {this.state.campuses.map(campus =>
                    <Option>{campus.name} | {campus.city.name} </Option>
                )}
                </Select>
                </SelectWrapper>
            </CampusContainer>
        )
    }
}

export default HeaderCampus
