import React from 'react' 
import { Card, Image } from 'semantic-ui-react'

const ClientCard = (props) => {
        console.log(props)
        return (
            <div>
                <Card >
                    <Image src= "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png"/>
                    <Card.Content >
                        <Card.Header>
                        {props.client.name}
                        </Card.Header>
                        <Card.Description>
                        {props.client.age} 
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        *Place your info here*
                    </Card.Content>
                </Card>
            </div>
        )
    }


export default ClientCard

