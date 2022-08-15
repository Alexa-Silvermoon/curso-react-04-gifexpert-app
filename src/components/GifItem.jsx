
// export const GifItem = ( props ) => {
// export const GifItem = ( { image } ) => {
export const GifItem = ( { title, url, id } ) => {

  // console.log( props );
  // console.log( image );
  // console.log( { title, url, id } );

  // finalmente renderiza los gif en el html
  return (

    <div className="card">

      <img src={ url } alt={ title }></img>
      <p>{ title }</p>

    </div>
  )
}
 // https://www.udemy.com/course/react-cero-experto/learn/lecture/19758956#questions