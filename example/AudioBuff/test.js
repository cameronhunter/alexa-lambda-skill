import test from 'ava';
import Request from '../../src/request';
import AudioBuff from './index';

test('PlaySongIntent', t => {
  const event = Request.intent('PlaySongIntent').build();

  return AudioBuff(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        directives: [
          {
            type: 'AudioPlayer.Play',
            playBehavior: 'REPLACE_ALL',
            audioItem: {
              stream: {
                url: 'https://example.com/somesong.mp3',
                token: 'Some Awesome Song'
              }
            }
          },
        ]
      }
    });
  });
});

test('AudioPlayerEvent plays next song', t => {
  const event = Request.audioPlayerEvent('AudioPlayer.PlaybackStarted', 'Some Awesome Song').build();

  return AudioBuff(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        directives: [
          {
            type: 'AudioPlayer.Play',
            playBehavior: 'ENQUEUE',
            audioItem: {
              stream: {
                url: 'https://example.com/nextsong.mp3',
                token: 'Next Awesome Song'
              }
            }
          },
        ]
      }
    });
  });
});

test('AudioPlayerEvent stops after second song', t => {
  const event = Request.audioPlayerEvent('AudioPlayer.PlaybackStarted', 'Next Awesome Song').build();

  return AudioBuff(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        directives: [
          {
            type: 'AudioPlayer.Stop'
          },
        ]
      }
    });
  });
});