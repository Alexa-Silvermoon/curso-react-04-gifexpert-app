
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=14OSyua313kBBUfJYUypqcp7V8PPwZ8x&q=${ category }&limit=30`;
  
    const resp = await fetch( url);
  
    const { data } = await resp.json();
  
    // console.log( data); // trae toda la data en la consola de chrome
  
    const gifs = data.map( img => ({
  
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  
    }));
  
    // console.log( gifs ); // trae solo id,title, url del gisg, desde consola chrome
    // url gif de ejemplo pokemon: https://media0.giphy.com/media/U2nN0ridM4lXy/giphy.gif?cid=e9ea52aa38vynxhwrwtlyh6eqdtbh4fmywjm0nvejdppkwpc&rid=giphy.gif&ct=g
  
    return gifs;
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19756276?start=555#questions
