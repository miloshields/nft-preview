import NFT from './NFT.js'
import Tickets from './Tickets.js'
import Header from './Header.js'

function App() {

  const content = 
  [
    {
      title: "I. Solving the Unsolvable",
      text: "This paper, and its associated patent, solved the problem of ensuring the integrity of digital data by imagining a decentalized system of a widely witnessable sequence of hash values. This begins the blockchain.",
      tickets:[],
      readMoreLink: "https://www.google.com"
    },
  ]

  return (
    <div>
      {content.map((NFTContent) => <NFT props={NFTContent} />)}
      <Header />
      <Tickets />
    </div>
  );
}

export default App;
