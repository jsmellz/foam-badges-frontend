import React, { useEffect } from 'react'
import { useWeb3Context } from 'web3-react'
 
// This component must be a child of <App> to have access to the appropriate context
export default function Web3Check () {
  const context = useWeb3Context()
 
  useEffect(() => {
    context.setFirstValidConnector(['MetaMask'])
  }, [])
 
  if (!context.active && !context.error) {
    // loading
    console.log("LOADING")
    return null
  } else if (context.error) {
    //error
    return console.log("ERROR")
  } else {
    // success
    return console.log("ACCOUNT", context.account)
  }
}