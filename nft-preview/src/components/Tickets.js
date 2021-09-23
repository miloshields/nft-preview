import Ticket from './Ticket';
import '../styles/Tickets.css'

const Tickets = () => {
    const ticketInfo = [
        {
            type: "default",
            title: "I.A - Dissertation",
            image: "StuartDissertationComposite.png",
            alt: "Image of Stuart Haber superimposed on the front cover of his dissertation.",
            text: "The topics of Haber’s dissertation, though not widely recognized at the time, today exist at the heart of cryptographic research.",
            link: "https://www.google.com"
        },
        {
            type: "default",
            title: "I.B - Full Disclosure",
            image: "ScottDisclosureComposite.png",
            alt: "Image of Scott Stornetta superimposed on a disclosure document for Bellcore.",
            text: "Stornetta discloses he is currently working on “a way to prove a digital record hasn’t been altered.” The solution, however, must wait.",
            link: "https://www.google.com"
        },
        {
            type: "default",
            title: "I.C - Friendly’s",
            image: "friendlysB&W.png",
            alt: "Picture of the outside of a Friendly's restaurant.",
            text: "Stornetta, while waiting for a restaurant table, realizes how making everyone a witness to a linked chain of records eliminates the conundrum.",
            link: "https://www.google.com"
        }
    ]

    return (
        <div className="tickets-contain">
            <div className="tickets-grid">
                <Ticket props={ticketInfo[0]}/>
                <Ticket props={ticketInfo[1]}/>
                <Ticket props={ticketInfo[2]}/>
                <Ticket props={{type: "golden"}}/>
            </div>
        </div>
    )
}

export default Tickets
