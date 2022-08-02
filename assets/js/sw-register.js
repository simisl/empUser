if('serviceWorker' in navigator){
  navigator.serviceWorker.register('assets/js/sw.js',{
    scope: 'assets/js/'
  })
  .then(registration =>{
    console.log('service worker success')
  });
}
