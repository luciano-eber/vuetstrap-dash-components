export default class componentRoute {
    constructor(config) {
      this._path = config.path ?? ''
      this._name = config.name ?? ''
      this._component = config.component ?? ''
      this._meta = config.meta ?? {}
    }
  
    get path() {
      return `/components/${this._path}/`
    }
  
    get name() {
      return this._name
    }
  
    get component() {
      return () => import(`../../views/components/${this._component}`)
    }
  
    get meta() {
      return this._meta
    }
  }
  