var store = {
    debug: true,
    state: {
      message: 'Hello!'
    },
    setMessageAction (newValue) {
      if (this.debug) console.log('setMessageAction triggered with', newValue)
      this.state.message = newValue
    },
    clearMessageAction (key) {
      if (this.debug) console.log('clearMessageAction triggered')
      this.state[key] = ''
    }
  }