import {Component} from 'react'
import './index.css'
import HistoryItems from '../AppList'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

console.log(initialHistoryList.length)

class Home extends Component {
  state = {
    historyItems: initialHistoryList,
    seachResults: '',
  }

  onChangeSearch = event => {
    this.setState({seachResults: event.target.value})
  }

  onDeleteSelection = id => {
    const {historyItems} = this.state
    const filteredResults = historyItems.filter(each => each.id !== id)
    this.setState({historyItems: filteredResults})
  }

  noDataRender = () => (
    <div className="no_data_con">
      <p>There is no history to show</p>
    </div>
  )

  render() {
    const {historyItems, seachResults} = this.state
    const searchInput = historyItems.filter(each =>
      each.title.includes(seachResults),
    )
    return (
      <div className="whole-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="name-logo"
          />
          <div className="search-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
          </div>
          <input
            type="search"
            className="search-background"
            onChange={this.onChangeSearch}
            placeholder="search"
            value={seachResults}
          />
        </div>
        <ul className="ul-con">
          {historyItems.length === 0
            ? this.noDataRender()
            : searchInput.map(eachList => (
                <HistoryItems
                  eachListContainer={eachList}
                  key={eachList.id}
                  onDeleteSelection={this.onDeleteSelection}
                />
              ))}
        </ul>
      </div>
    )
  }
}
export default Home
