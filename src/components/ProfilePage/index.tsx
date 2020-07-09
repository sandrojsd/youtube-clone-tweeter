import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton  
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Alexsandro Trindade</h1>
        <h2>@AlexsandroTrin9</h2>

        <p>
          Developer at <a href="https://twitter.com/tcerondonia">@tcerondonia</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rondônia, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 15 de dezembro de 1983
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;