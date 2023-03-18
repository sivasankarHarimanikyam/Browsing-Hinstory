import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
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

const BrowsingItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="sub-list-logo">
      <div>
        <p className="para1">{timeAccessed}</p>
      </div>
      <div className="total-logo">
        <div className="logo-list">
          <img src={logoUrl} alt="domain logo" className="logo-edit1" />
          <p className="para2">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <div>
          <button onClick={onDelete} type="button" className="btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

class BrowsingHistory extends Component {
  state = {searchInput: '', historyListDetails: initialHistoryList}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {historyListDetails} = this.state
    const filterData = historyListDetails.filter(ea => ea.id !== id)
    this.setState({historyListDetails: filterData})
  }

  render() {
    const {searchInput, historyListDetails} = this.state
    const searchResults = historyListDetails.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="pic-edit"
          />
          <div className="sub-search">
            <div className="search-logo-bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="pic-edit2"
              />
            </div>
            <input
              type="search"
              className="search"
              onChange={this.onSearchInput}
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="sub-container2">
          {searchResults.length !== 0 ? (
            <div className="sub-list">
              <ul className="ul">
                {searchResults.map(eachHis => (
                  <BrowsingItem
                    historyDetails={eachHis}
                    key={eachHis.id}
                    deleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <p>There is no history to show</p>
          )}
        </div>
      </div>
    )
  }
}

// Replace your code here
const App = () => (
  <div>
    <BrowsingHistory />
  </div>
)

export default App
