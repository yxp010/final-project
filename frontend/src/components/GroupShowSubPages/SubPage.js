import React, { PureComponent } from 'react'
// sub page components 
import Description from './Description'
import UpcomingEvents from './UpcomingEvents'

// bootstrap nav
import Nav from 'react-bootstrap/Nav'
class SubPage extends PureComponent {

    state = {
        currentSubPage: 'description'
    }

    subPageOnSelect = e => {
        this.setState({
            currentSubPage: e
        })
    }

    showSubPage = () => {
        switch (this.state.currentSubPage) {
            case 'description': 
                return <Description description={this.props.group.description}/>
            case 'upcomingEvents':
                return <UpcomingEvents events={this.props.upcomingEvents}/>
            case 'discussion':
                return null
            default:
                return <Description description={this.props.group.description}/>
        }
    }

    render() {
        return(
                <div style={{maxWidth: '80%', width: '100%', margin: '0 auto'}}>
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="description" onSelect={this.subPageOnSelect}>Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="upcomingEvents" onSelect={this.subPageOnSelect}>Upcomming Events</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="discussion" onSelect={this.subPageOnSelect}>Discussion</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {this.showSubPage()}
                </div>
        )
    }
}

export default SubPage