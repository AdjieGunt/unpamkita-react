// import ReadView from './component/ReadView'

// // Sync route definition
// export default {
//   component : ReadView
// }


export default (store) => ({
  path : 'create/article',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Category = require('./components/EditorView').default
      /*  Add the reducer to the store on key 'counter'  */
      /*  Return getComponent   */
      cb(null, Category)

    /* Webpack named bundle   */
    }, 'create')
  }
})
