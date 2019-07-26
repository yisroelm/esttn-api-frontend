import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const AppointmentCard = (props) => {

        // console.log(props.appointment.date)
        return (
            <div>
                <Card >
                    <Image src= "https://i.pinimg.com/236x/2b/5f/0d/2b5f0d0d4e1fe2d061258505b9a44b6e--estheticians-skincare.jpg"/>
                    <Card.Content >
                        <Card.Header>
                        {props.appointment.date}
                        </Card.Header>
                        <Card.Description>
                        {props.appointment.time} 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        Please be on time to your appointment
                    </Card.Content>
                </Card>
            </div>
        )
    }


export default AppointmentCard

