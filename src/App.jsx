import "./App.css";
import AudioPlayer from "react-h5-audio-player";
import React, { useState } from "react";

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
      created_at: "2023-01-17",
      duration: "3:57",
    },
    {
      id: 2,
      name: "Ab-Dul Sound",
      title: "Boombap",
      album: "Toasty Sound",
      url: "https://res.cloudinary.com/dq3ltjvsg/video/upload/v1673905703/Werkix%20Assignment/love_-_boombap_ginxfh.mp3",
      created_at: "2023-01-17",
      duration: "2:29",
    },
    {
      id: 3,
      name: "Ab-Dul Sound",
      title: "Person",
      album: "Toasty Sound",
      url: "https://res.cloudinary.com/dq3ltjvsg/video/upload/v1673905976/Werkix%20Assignment/person._fw9vgw.mp3",
      created_at: "2023-01-17",
      duration: "2:13",
    },
  ];

  const [currentTrack, setTrackIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songName, setSongName] = useState("");
  const [foundSongs, setFoundSongs] = useState(playlist);

  const filter = (e) => {
    const query = e.target.value;

    if (query !== "") {
      const results = playlist.filter((song) => {
        return song.title.toLowerCase().startsWith(query.toLowerCase());
      });
      setFoundSongs(results);
    } else {
      setFoundSongs(playlist);
    }

    setSongName(query);
  };

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
          <Col xs>
            <img
              src="https://res.cloudinary.com/dq3ltjvsg/image/upload/v1673909831/Werkix%20Assignment/pexels-foteros-352505_rjbkts.png"
              className=".cover"
              alt="Playlist Cover"
            />
          </Col>
          <Col>
            <CardTitle tag="h5" className="text-start">
              Playlist
            </CardTitle>
            <CardText className="text-start" tag="h1">
              Can You Werkix
            </CardText>
            <CardText className="text-start">
              Creating a Playlist App in React
            </CardText>
            <CardText className="text-start">
              Created By: Daniel Mgawi • {playlist.length} Songs
            </CardText>
            <Button
              className=".button"
              color="primary"
              size="sm"
              onClick={handleClickNext}
            >
              {isPlaying ? "Pause" : "Play"}
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Input
              bsSize="sm"
              type="search"
              value={songName}
              onChange={filter}
              className="input"
              placeholder="Search Song Title"
            />
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
                {foundSongs.map((song, key) => (
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
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
