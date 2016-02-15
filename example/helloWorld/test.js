import test from 'ava';
import HelloWorld from '../../build/example/helloWorld';

test('LaunchRequest', t => {
  const event = {
    request: { type: 'LaunchRequest' }
  };

  return HelloWorld(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Welcome to the Alexa Skills Kit, you can say hello' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'You can say hello' } }
      }
    });
  });
});

test('HelloWorldIntent', t => {
  const event = {
    request: {
      type: 'IntentRequest',
      intent: {
        name: 'HelloWorldIntent'
      }
    }
  };

  return HelloWorld(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'Hello World!' },
        card: { type: 'Simple', title: 'Greeter', content: 'Hello World!' }
      }
    });
  });
});

test('AMAZON.HelpIntent', t => {
  const event = {
    request: { type: 'IntentRequest', intent: { name: 'AMAZON.HelpIntent' } }
  };

  return HelloWorld(event).then(response => {
    t.same(response, {
      version: '1.0',
      response: {
        shouldEndSession: true,
        outputSpeech: { type: 'PlainText', text: 'You can say hello to me!' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'You can say hello to me!' } }
      }
    });
  });
});
