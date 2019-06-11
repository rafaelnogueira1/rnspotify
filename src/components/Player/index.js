import React from 'react';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcons,
} from './styles';

const Player = () => (
  <Container>
    <CoverBackground source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover3.png' }} />
    <EpisodeInfo>
      <Title>Papercut</Title>
      <Author>Linkin Park</Author>
    </EpisodeInfo>

    <Controls>
      <ControlButton onPress={() => {}}>
        <ControlIcons name="skip-previous" />
      </ControlButton>

      <ControlButton onPress={() => {}}>
        <ControlIcons name="play-circle-filled" />
      </ControlButton>

      <ControlButton onPress={() => {}}>
        <ControlIcons name="skip-next" />
      </ControlButton>
    </Controls>
  </Container>
);

export default Player;
