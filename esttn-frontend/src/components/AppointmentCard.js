import React from 'react' 
import { Card, Image } from 'semantic-ui-react'

const AppointmentCard = (props) => {

        // console.log(props.appointment.date)
        return (
            <div>
                <Card >
                    <Image src= "https://cms.cloudinary.vpsvc.com//image/fetch/t_sitecore_images/f_auto,dpr_auto,w_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen%2F%7B374A563C-F2A9-4BE5-B161-D84E80C521CC%7D"/>
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

