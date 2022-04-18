<script setup>
import DefaultPage from '@/components/DefaultPage'
import Alert from '@/components/Alert'
</script>

<template> 
  <DefaultPage title="Alerts" :breadcrumbs="[{name: 'Components'}]" :hasCardContent="false">
    <template #content> 
      <div class="row">

        <div class="col-12">
          <h4>Usage</h4>
          <p><code>import Alert from '@/components/Alert'</code></p>
        </div>

        <div class="col-lg-6 mt-3 mb-3">
          <div class="row">
            <div class="col-12">
              <h4>Color Variants</h4>
              <p><code>{{ `${'<Alert variant="{value}"></Alert>'}` }}</code></p>
            </div>  
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Alert ref="firstAlert">
                    Default variant is <strong>primary</strong>
                  </Alert>
                  <Alert variant="secondary">
                    secondary
                  </Alert>
                  <Alert variant="success">
                    success
                  </Alert>
                  <Alert variant="danger">
                    danger
                  </Alert>
                  <Alert variant="warning">
                    warning
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mt-3 mb-3">
          <div class="row">
            <div class="col-12">
              <h4>Dismissible Alerts</h4>
              <p><code>{{ `${'<Alert variant="{value}" dismissible></Alert>'}` }}</code></p>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Alert dismissible>
                    Dismissible <strong>primary</strong>
                  </Alert>
                  <Alert dismissible variant="secondary">
                    Dismissible secondary
                  </Alert>
                  <Alert dismissible variant="success">
                    Dismissible success
                  </Alert>
                  <Alert dismissible variant="danger">
                    Dismissible danger
                  </Alert>
                  <Alert dismissible variant="warning">
                    Dismissible warning 
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mt-3 mb-3 ">
          <div class="row">
            <div class="col-12">
              <h4>Links styles</h4>
              <p><code>{{ `${'<a href="#" class="alert-link">an example link</a>'}` }}</code></p>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Alert>
                    A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                  </Alert>
                  <Alert variant="success">
                    A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                  </Alert>
                  <Alert variant="danger">
                    A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                  </Alert>
                  <Alert variant="warning">
                    A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mt-3 mb-3 ">
          <div class="row">
            <div class="col-12">
              <h4>With Icons</h4>
              <p><code>{{ `${'<Alert variant="{value}" :icon="true"></Alert>'}` }}</code></p>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <Alert :icon="true" dismissible>
                    Primary variant with icon and dismissible
                  </Alert>
                  <Alert variant="success" :icon="true">
                    Success variant with icon
                  </Alert>
                  <Alert variant="danger" :icon="true" dismissible>
                    Danger variant with icon and dismissible
                  </Alert>
                  <Alert variant="warning" :icon="true">
                    Warning variant with icon
                  </Alert>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 mt-3 mb-3">
          <h4>Programmatically Usage</h4>
          <p>For access component exposes, pass <code>ref=""</code> attribute to component</p>
          <div class="card">
            <div class="card-body">
              <p>
                <code>
                  const yourAlertRef = ref()
                  <br>
                  {{ `${'<Alert variant="{value}" ref="yourAlertRef"></Alert>'}` }}
                </code>
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 mt-2 mb-2">
          <h5>Methods</h5>
          <h6>hide</h6>
          <div class="card">
            <div class="card-body">
              <p><code>yourAlertRef.value.hide()</code></p>
            </div>
          </div> 
        </div>
      </div>
    </template>
  </DefaultPage>
</template>