import '../styles/Ticket.css';
import Button from 'react-bootstrap/Button';
import Image from './Image';

const Ticket = ({props}) => {
    if(props.type === "default") {
        return (
            <div className="ticket-contain">
                <div className="flex-vertical">
                    <div className="centered ">
                        <h2 className="ticket-heading">{props.title}</h2>
                    </div>
                    <div className="ticket-content">
                        <Image name={props.image} altProp={props.alt} classProp="thumbnail" />
                        <div>
                            <p className="ticket-text">{props.text}<br /><a target="_blank" rel="noreferrer" href={props.link}>Read More</a></p>
                        </div>
                        
                        <div className="ticket-button flex-vertical centered">
                            <Button target="_blank" href={"https://www.google.com"} className="btn-sm btn-info button-direct">Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="golden-ticket-contain centered flex-vertical">
                <div className="centered flex-horizontal">
                    <h4 className="golden-header">GOLDEN TICKET</h4>
                </div>
            </div>
        )
    }
}

export default Ticket
