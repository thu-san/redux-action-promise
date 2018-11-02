# Redux Action Promise

#### `documentation not complete yet`

Middleware for wrapping redux actions with promise.  
Allows component to detect dispatched action is finished or not.  
`resolve` and `reject` are passed to `action` object and you can call these after you have finished doing logic in actions or sagas.

## Installation

```javascript
npm i -S redux-action-promise
```

## Set up

```javascript
import { reduxActionPromise } from 'redux-action-promise';
...
createStore(
  reducer,
  initialState,
  applyMiddleware(reduxActionPromise, ...)
)
```

## Usage

### Redux Action

```javascript
// component.js
class CustomComponent extends React.Component {
  ...
  onPress = async () => {
    this.setState({ showLoading: true });
    await this.props.login();
    this.setState({ showLoading: false });
  }
  ...
}

export default connect(null, { login })(CustomComponent);

// saga
function* login({resolve}) {
  yield delay(3000);
  resolve(); // <-- resolve promise
}
```

### With Redux Form

```javascript
// component.js
import { rfSubmitPromise } from 'redux-action-promise';

class CustomComponent extends React.Component {
  ...
  onPress = async () => {
    this.setState({ showLoading: true });
    try {
      await rfSubmitPromise(this.props.handleSubmit, 'LOGIN_TRIGGER');
    } catch (e) {
      console.log(e);
    }
    this.setState({ showLoading: false });
  }
  ...
}

// saga
import { SubmissionError } from 'redux-form';

function* login({resolve}) {
  try {
    yield delay(3000);
    resolve(); // <-- resolve promise
  } catch (e) {
    throw new SubmissionError({
      error: 'error occurred'
    })
  }
}
```

#### Note

You can throw SubmissionError as above or you can use pass `onError` to `rfSubmitPromise` as below.

```javascript
// component.js
onPress = async () => {
  this.setState({ showLoading: true });
  try {
    await rfSubmitPromise(this.props.handleSubmit, 'LOGIN_TRIGGER', e => {
      // `e` is thrown from saga
      throw new SubmissionError({
        error: 'error handled in component'
      });
    });
  } catch (e) {
    // throwing SubmissionError here won't work as SubmissionError need to be thrown inside handleSubmit function of redux-form
    console.log(e);
  }
  this.setState({ showLoading: false });
};

// saga
function* login({ resolve, reject }) {
  try {
    yield delay(3000);
    resolve(); // <-- resolve promise
  } catch (e) {
    reject(e); // <-- just reject error
  }
}
```
