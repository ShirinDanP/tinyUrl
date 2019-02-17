export function genhash() {
  if (window.location.hash == '') {
    window.location.hash = getrandom();
  }
}
