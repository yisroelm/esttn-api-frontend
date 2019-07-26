import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class AppointmentCard extends Component {


    render() {
        // console.log(this.props.appointment.date)
        return (
            <div>
                <Card >
                    <Image src= "https://i.pinimg.com/236x/2b/5f/0d/2b5f0d0d4e1fe2d061258505b9a44b6e--estheticians-skincare.jpg"/>
                    <Card.Content >
                        <Card.Header>
                        {this.props.appointment.date}
                        </Card.Header>
                        <Card.Description>
                        {this.props.appointment.time} 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        Please be on time to your appointment
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

