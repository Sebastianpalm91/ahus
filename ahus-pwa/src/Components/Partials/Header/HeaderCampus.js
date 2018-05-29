import React, {Component} from 'react';
import { CampusContainer, Select, Option, StyledLink, Logo, SelectWrapper, Back } from './styles';
import axios from 'axios';

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
            })
    }
    render() {
    return(
            <CampusContainer>
                <Back to=''></Back>
                <StyledLink to='/' alt="Logo-Hem" name="Logo"><Logo></Logo></StyledLink>
                <SelectWrapper>
                    <Select onChange={this.props.changeCampus}>
                        <Option>--Välj campus här--</Option>
                        {this.state.campuses.map(campus =>
                            <Option key={campus.id} id={campus.id} data-long={campus.longitude} data-lat={campus.latitude}>{campus.name} | {campus.city.name} </Option>
                        )}
                    </Select>
                </SelectWrapper>
            </CampusContainer>
        )
    }
}

export default HeaderCampus
