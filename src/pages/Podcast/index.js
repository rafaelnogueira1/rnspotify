import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PlayerActions from '~/store/ducks/player';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  EpisodeList,
  Episode,
  Title,
  Author,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  BackButton,
} from './styles';

class Podcast extends Component {
  componentDidMount() {}

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handlePlay = (episodeID) => {
    const { setPodcastRequest, navigation } = this.props;
    const podcast = navigation.getParam('podcast');

    setPodcastRequest(podcast, episodeID);
  };

  render() {
    const { navigation, currentEpisode } = this.props;
    const podcast = navigation.getParam('podcast');

    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />
              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#fff" />
              </BackButton>
              <Cover source={{ uri: podcast.cover }} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={() => this.handlePlay()}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode onPress={() => this.handlePlay(episode.id)}>
              <Title active={currentEpisode && currentEpisode.id === episode.id}>
                {episode.title}
              </Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(episode => episode.id === state.player.current)
    : null,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Podcast);
