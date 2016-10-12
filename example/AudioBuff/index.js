import { Skill, Intent, Launch, AudioPlayerEvent } from '../..';
import { ask, directives, AudioPlayer } from 'alexa-response';

@Skill
export default class AudioBuff {

  @Launch
  launch() {
    return ask('Welcome to the Audio Buff! You can say play song').reprompt('You can say play song');
  }

  @Intent('PlaySongIntent')
  playSong() {
    return directives(AudioPlayer.play(
      {
        url: 'https://example.com/somesong.mp3',
        token: 'Some Awesome Song'
      }
    )).build();
  }

  @AudioPlayerEvent('AudioPlayer.PlaybackStarted')
  audioPlayerPlaybackStarted(request) {
    // do something with the request, e.g. use the token or the request context
    // to queue the next song.
    let directive = AudioPlayer.stop();
    if (request.token === 'Some Awesome Song') {
      directive = AudioPlayer.enqueue(
        {
          url: 'https://example.com/nextsong.mp3',
          token: 'Next Awesome Song'
        }
      );
    }

    return directives(directive);
  }
}
