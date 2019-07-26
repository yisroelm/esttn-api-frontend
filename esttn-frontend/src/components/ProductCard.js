import React from 'react' 
import { Card, Image } from 'semantic-ui-react'

const ProductCard = (props) => {
        return (
            <div>
                <Card >
                    <Image src= "https://www.mariobadescu.com/content/images/thumbs/0110787_facial-spray-with-aloe-herbs-and-rosewater.jpeg"/>
                    <Card.Content >
                        <Card.Header>
                        {props.product.name}
                        </Card.Header>
                        <Card.Description>
                        A very special product
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                       Don't let the strange names fool you
                    </Card.Content>
                </Card>
            </div>
        )
    }


export default ProductCard
