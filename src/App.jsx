import "./App.css";
import React from "react";
import AudioPlayer from "react-h5-audio-player";

import {
  Container,
  Col,
  Row,
  CardText,
  CardTitle,
  Button,
  Input,
  Table,
} from "reactstrap";

function App() {
  const playlist = [
    {
      id: 1,
      name: "Kanye West",
      title: "Hurricane (ft. Lil Baby & The Weekend)",
      album: "Donda",
      url: "https://res.cloudinary.com/dq3ltjvsg/video/upload/v1673905674/Werkix%20Assignment/Kanye_West_-_Donda_-_Hurricane_ft._Lil_Baby_The_Weekend_ycarc3.mp4",
      created_at: "2021-10-04T23:30:01.000Z",
      duration: "3:57",
    },
    {
      id: 2,
      name: "Ab-Dul Sound",
      title: "Boombap",
      album: "Toasty Sound",
      url: "https://res.cloudinary.com/dq3ltjvsg/video/upload/v1673905703/Werkix%20Assignment/love_-_boombap_ginxfh.mp3",
      created_at: "2021-10-04T23:30:01.000Z",
      duration: "2:29",
    },
    {
      id: 3,
      name: "Ab-Dul Sound",
      title: "Person",
      album: "Toasty Sound",
      url: "https://res.cloudinary.com/dq3ltjvsg/video/upload/v1673905976/Werkix%20Assignment/person._fw9vgw.mp3",
      created_at: "2021-10-04T23:30:01.000Z",
      duration: "2:13",
    },
  ];

  const [currentTrack, setTrackIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const buttonPlayClicked = () => {
    setIsPlaying((playing) => !playing);
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleEnd = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </Col>
          <Col>
            <CardTitle tag="h5" className="text-start">
              Playlist
            </CardTitle>
            <CardText className="text-start" tag="h1">
              Playlist Name
            </CardText>
            <CardText className="text-start">Playlist Description</CardText>
            <CardText className="text-start">
              Created By: Owner • {playlist.length} Songs
            </CardText>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Button color="primary" size="sm" onClick={handleClickNext}>
              {isPlaying ? "Pause" : "Play"}
            </Button>
          </Col>
          <Col xs="6">
            <Row>
              <Col sm="4">
                <ion-icon name="search-outline"></ion-icon>
              </Col>
              <Col>
                <Input bsSize="sm" type="search" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table borderless hover responsive size="">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Album</th>
                  <th>Date Added</th>
                  <th>
                    <ion-icon name="time-outline" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {playlist.map((song, key) => (
                  <tr key={key}>
                    <td>{song.id}</td>
                    <td>{song.title}</td>
                    <td>{song.name}</td>
                    <td>{song.created_at}</td>
                    <td>{song.duration}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <AudioPlayer
              className=".container"
              volume="0.5"
              src={playlist[currentTrack].url}
              showSkipControls
              showJumpControls={false}
              onClickNext={handleClickNext}
              onEnded={handleEnd}
              // Try other props!
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
