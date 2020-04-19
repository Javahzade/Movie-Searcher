import React from 'react';
import {View, Image, Text} from 'react-native';
import {movieStyle} from '../Style';

const Movie = ({data}) => {
  const {header, container, title, titleSize, img, text} = movieStyle;
  const {name, genres, network, rating, premiered, image, summary} = data;
  let isNetwork = network == null ? ' ' : network.country.name;
  let isImage =
    image == null
      ? 'https://261426.selcdn.ru/cheapscales/3193/noimage.jpg'
      : image.medium;
  let isSummary = summary == null ? ' ' : summary;
  return (
    <View style={header}>
      <View style={container}>
        <Image style={img} source={{uri: isImage}} />
        <View style={titleSize}>
          <Text style={title}>Name: {name}</Text>
          <Text style={title}>Genres: {genres.join(', ')}</Text>
          <Text style={title}>Country: {isNetwork}</Text>
          <Text style={title}>Rating: {rating.average}</Text>
          <Text style={title}>Premier data: {premiered}</Text>
        </View>
      </View>
      <Text style={text}>
        Description: {isSummary.replace(/(<([^>]+)>)/gi, '')}
      </Text>
    </View>
  );
};
export default Movie;
