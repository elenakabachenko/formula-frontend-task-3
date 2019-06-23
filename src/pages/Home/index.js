import React, { Component, Fragment } from 'react'
import qs from 'query-string'
import _ from 'lodash';
import Item from './Item'
import HeadLine from '../../components/Headline'

export default class Home extends Component {

  state = {
    isLoading: false,
    data: [],
    enableImages: false
  }

  filterByExpiration(items) {
    return !Array.isArray(items)
      ? []
      : items.filter(item => Date.parse(item.expirationDate) > Date.now())
  }

  async componentDidMount() {
    const disableFilter = Object.keys(qs.parse(_.get(this.props, 'location.search', null))).find(item => item === 'disableFilter')
    const enableImages = Object.keys(qs.parse(_.get(this.props, 'location.search', null))).find(item => item === 'enableImages')


    this.setState({ isLoading: true })
    const result = await fetch('https://formula-test-api.herokuapp.com/menu')
      .then(response => response.json())
    const data = disableFilter ? result : this.filterByExpiration(result)
    this.setState({ data, isLoading: false, enableImages: !!enableImages })
  }

  render() {
    const { isLoading, data, enableImages } = this.state
    return (

      <Fragment>
        <HeadLine />
        {
          isLoading
            ? <h1>Loading...</h1>
            : <section className="container-hotdogs">{data.map(
              item => <Item key={item.id}  {...item} enableImages={enableImages} />)}</section>
        }

      </Fragment>
    )
  }

}