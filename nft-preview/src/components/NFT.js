import 'bootstrap/dist/css/bootstrap.css';
import '../styles/NFT.css';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';

const NFT = ( {props} ) => {
    // run whenever an instance of this component mounts
    useEffect(() => console.log(`Got props:${JSON.stringify(props)} `),[])

    return (
        <div className="NFT-contain">
            <Image type="large" classProp="NFT-image" name="PaperAndPatent1.png" />
            <div className="centered flex-vertical">
                <div>
                    <h1 className="NFT-title">{props.title}</h1>
                    <p className="content-text">{props.text}</p>
                    <div className="button-contain">
                        <Button target="_blank" rel="noreferrer" href={props.readMoreLink} className="btn btn-info">Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFT
