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
import promiseMiddleware from 'redux-action-promise';
...
createStore(
  reducer,
  initialState,
  applyMiddleware(promiseMiddleware, ...)
)
```

## Usage

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
