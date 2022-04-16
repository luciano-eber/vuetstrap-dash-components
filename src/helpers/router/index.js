export class Route {
  constructor(config) {
    this.basePath = config.basePath ?? ''
    this.baseViews = config.baseViews ?? ''
    this._path = config.path ?? ''
    this._name = config.name ?? ''
    this._component = config.component ?? ''
    this._meta = config.meta ?? {}
  }
  
  get path() {
    return `/${this.basePath}/${this._path}/`
  }
  
  get name() {
    return this._name
  }

  get component() {
    return () => import(`@/${this.baseViews}/${this._component}`)
  }

  get meta() {
    return this._meta
  }
}

export class RouteGroup {
  constructor(config) {
    this.basePath = config.basePath ?? ''
    this.baseViews = config.baseViews ?? ''
    this.routes = []
  }

  addRoute(route) {
    const newRoute = new Route({
      basePath: this.basePath,
      baseViews: this.baseViews,
      path: route.path,
      name: route.name,
      component: route.component,
      meta: route.meta ?? []
    })

    this.routes.push(newRoute)
  }
}