import React from 'react'
import classNames from 'classnames'

import styles from './styles.css'

class Header extends React.Component {
  _renderTitleClass () {
    const titleClass = {}
    titleClass[styles.title] = true
    titleClass[styles.red] = true
    return classNames(titleClass)
  }
  render () {
    return (
      <div>
        <h1
          className={this._renderTitleClass()}
        >
          Header
        </h1>
      </div>
    )
  }
}

export default Header
