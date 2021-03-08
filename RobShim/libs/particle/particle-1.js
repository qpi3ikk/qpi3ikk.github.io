document.all.logo.dataset.addTimestamp = true;
if (!document.all.logo.dataset.initPosition) {
  document.all.logo.dataset.initPosition = 'none';
}
if (!document.all.logo.dataset.initDirection) {
	document.all.logo.dataset.initDirection = 'none';
}
if (!document.all.logo.dataset.fadePosition) {
  document.all.logo.dataset.fadePosition = 'none';
}
if (!document.all.logo.dataset.fadeDirection) {
	document.all.logo.dataset.fadeDirection = 'none';
}
// const newLocal = /9846546/;
// if (!newLocal.test(location.href)) {
  if (!document.all.logo.dataset.width) {
    document.all.logo.dataset.width = ~~window.innerWidth;
  }
  if (!document.all.logo.dataset.height) {
    document.all.logo.dataset.height = ~~window.innerHeight;
  }
// }
