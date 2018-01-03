import React from 'react'
import Products from '../components/Products'
import { connect } from 'react-redux'
const mapStateToProps = state => ({ products:state.products })
export default connect(mapStateToProps)(props => <Products {...props}/>)
