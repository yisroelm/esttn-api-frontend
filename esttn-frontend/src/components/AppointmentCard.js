import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class AppointmentCard extends Component {


    render() {
        return (
            <div>
                <Card >
                    <Image src= "https://i.pinimg.com/236x/2b/5f/0d/2b5f0d0d4e1fe2d061258505b9a44b6e--estheticians-skincare.jpg"/>
                    <Card.Content >
                        <Card.Header>
                        AppointmentCard Header
                        </Card.Header>
                        <Card.Description>
                        The AppointmentCard Description
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        AppointmentCard Content
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

