import React, { Component } from "react";
import Web3 from "web3";
import AlertRow from "../../alert-row"

class CheckProvider extends Component {
  constructor(props) {
    super(props);

    this.networkId = 3;

    this.state = {
      isMetaMaskInstalled: false,
      isMetaMaskUnlocked: false,
      networkId: -1,
      address: ""
    };
  }

  componentDidMount = () => {

    if (window.ethereum) {

      window.web3 = new Web3(window.ethereum);
      // added this here 
      this.isMetaMaskInstalled();

      window.ethereum
        .enable()
        .then(() => {
          this.isMetaMaskInstalled();
        })
        .catch(err => {
          console.log("ERR",err);
        });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);

      this.isMetaMaskInstalled();
    } 

  };

  componentDidUpdate = (prevProps, prevState) => {
    const {
      isMetaMaskInstalled,
      isMetaMaskUnlocked,
      networkId,
      address
    } = this.state;
 
    if (
      isMetaMaskInstalled !== prevState.isMetaMaskInstalled ||
      isMetaMaskUnlocked !== prevState.isMetaMaskUnlocked ||
      networkId !== prevState.networkId ||
      address !== prevState.address
    ) {
      this.isMetaMaskInstalled();
    } 
  };

  getAddress = () => {
    window.web3.eth
      .getAccounts()
      .then(accounts => {
        this.setState({
          address: accounts[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  isMetaMaskInstalled = () => {

    if (Web3.givenProvider && window.web3 && window.web3.currentProvider) {
      this.setState({
        isMetaMaskInstalled: true
      });
    }

    this.isMetaMaskUnlocked();
  };

  isMetaMaskUnlocked = () => {
    window.web3.eth
      .getAccounts()
      .then(accounts => {
        if (accounts.length > 0) {
          this.setState({
            isMetaMaskUnlocked: true
          });

          this.getNetwork();
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  getNetwork = () => {
    window.web3.eth.net
      .getId()
      .then(networkId => {
        // console.log("network", networkId);
        this.setState({
          networkId
        });

        this.getAddress();
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkMetaMask = () => {
    const {
      isMetaMaskInstalled,
      isMetaMaskUnlocked,
      networkId,
      address
    } = this.state;

    if (isMetaMaskInstalled === false) {
      console.log("metamask is not installed", this.state.isMetaMaskInstalled)
      return <AlertRow alertState={"installMetaMask"} />;
    } 

    if (isMetaMaskUnlocked === false) {
      console.log("metamask is locked", this.state.isMetaMaskUnlocked)
      return <AlertRow alertState={"unlockMetaMask"} />;
    }

    if (networkId !== this.networkId) {
      console.log("networkId is wrong")
      return <AlertRow alertState={"wrongNetwork"} />;
    }

    if (address === "") {
      console.log("ADDRESs is blank")
      return <AlertRow alertState={"unlockAccount"} />;
    }

    console.log("ADDRESS", address)
    this.props.doFetch(this.props.url + "?address=address1")
    return <AlertRow alertState={""} address={address} />;
  };

  render() {
    return <div>{this.checkMetaMask()}</div>;
  }
}

export default CheckProvider;
