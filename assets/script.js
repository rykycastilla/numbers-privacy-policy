function main() {
  const currentYear = document.querySelector( '#current-year' )
  if( currentYear === null ) { return }
  const year = new Date().getFullYear()
  currentYear.textContent = year
}

window.addEventListener( 'load', () => main() )
