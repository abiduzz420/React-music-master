# Music master

The app was built while I was learning ReactJS and Redux

## Concepts Learnt:

* Learnt how to handle different states
* Write Anonyomous arrow functions
* Passing props from Parent components to child components
* Conditional Rendering in React
* ES6 Concepts like
  * Initializing multiple variables from say, a json object:
  For example:
    ```
    const index = json.index;
    const preview_url = json.preview_url;
    const name = json.name;
    ```
      Instead we can utilize ES6 feature as below:
      ```
      const { index, preview_url, name } = json;
      ```
    Note that they must have same variable names as json objects
  * Same can be done when setting states.
    For example:
    ```
    let audio = new Audio(previewURL);
    this.setState({
      playing: true,
      playingURL : previewURL,
      audio     /* Need not do audio : audio */
    });
    ```
    If you have noticed, we do not need to explicitly set state for audio if they have same name.
  * Parsing a URL(Variables should be enclosed in ${} and no need to use '+' to concatenate):
    ```
    const BASE_URL = 'https://api.spotify.com/v1/search?'
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    ```
    '?' is important at the end of BASE_URL
* How to use react-bootstrap functionalities like FormControl,Button,InputGroup,FormGroup,Glyphicon
* How to use a web API(Fetching the URL and parsing JSON file)
* Handling promises returned from fetch function
* map() method to iterate over an Array in React
* CSS Styling
* Include Audio and Animation features

### Screenshot of the app:
![alt](http://i.imgur.com/i6DBt5lh.jpg)


### Further improvements:
Challenges

* Add more features from the Spotify API. For example, showing featured-playlists that feature the searched artist.

* Use the browse feature from the Spotify API to give recommendations to the user to search a trending artist.

* Store the user’s searches in cookies to have the last search show upon revisiting the application (Hint: the next application uses cookies, so perhaps you can come back to this one).
