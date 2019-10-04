AFRAME.registerComponent('bake', {
  init: function() {
    // console.log(THREE)
    baker(THREE)
    // console.log(THREE.LightBaking)
    // console.log(this.el.object3D);
    let self = this;
    console.log(THREE.LightBaking({
         "scene": self.el.object3D,
         "appMode": THREE.LightBaking.ApplicationExecutionEnum.SINGLETHREADED
    }))
    Instantiate a exporter
  }
})