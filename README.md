## Twitter iOS Modal
This is **React Component**, which looks like twitter-ios-modal when you push the button of ReTweet.

## Getting Started
To begin, you will need to install `twitter-ios-modal`:

`npm install --save twitter-ios-modal`

and import Modal Component.
You can set element in this component,which is poured into twitter modal.

```
import TwitterModal from 'twitter-ios-modal'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      flag:false
    }

    this.handleFlag = this.handleFlag.bind(this);
  }

  handleFlag(flag){
    this.setState({
      flag:flag
    })
  }

  render(){
    return(
      <div>
        <button onClick={() => this.handleFlag(true)}>Click Me!!</button>
        <Twitter
          flag={this.state.flag}
          handleFlag={this.handleFlag}
        >
        <div>ReTweet</div>
        </Twitter>
      </div>
    )
  }
}
```

## Usage

You Must Prepare
* flag:<span style="color:#22FF3C">boolean</span>

This variable implies which twitter modal appears or not.
Of cource, If true, twitter modal appears.Otherwise, twitter modal does not appears.

* handleFlag:<span style="color:#22FF3C">Function</span>

This function handles change of flag's value.
You must make this function as if you pass true in argument, flag will become true. Otherwise, flag will become false.

You can Prepare
* id:<span style="color:#22FF3C">string</span>

This variable is Modal's id.

* NightMode:<span style="color:#22FF3C">boolean</span>

if you set NightMode as true, Twitter modal will become night mode.

