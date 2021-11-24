<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,800">
</head>
<body>
    
    <div id="container">
        <div id="hook"></div>
        <h1>Play Music</h1>
        <input type="file" id="files" name="files[]" multiple />
    </div>
    <script crossorigin src="https://unpkg.com/react@15/dist/react.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    <script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
    <script src="https://soulwire.github.io/sketch.js/js/sketch.min.js"></script>
    <script src="app.js"></script>
    <script type="text/babel">
        /// Тут будет код на React.


        function PlayButton(props) {
            const className = props.isMusicPlaying ? 'play active' : 'play'
            return <a onClick={props.onClick} href='#' title='Play video' className={className} />
        }

        class Container extends React.Component  {
            constructor(props) {
                super(props) 
                this.state = { isMusicPlaying: true }
            }

            handleClick() {
                if (this.state.isMusicPlaying) {
                    this.audio.pause()
                } else {
                    this.audio.play()
                }
                this.setState(prevState => {
                    return {
                        isMusicPlaying: !prevState.isMusicPlaying
                    }   
            })
            }
            
            render() {
                return (
                    <div>
                        <PlayButton 
                            onClick={this.handleClick.bind(this)}   
                            isMusicPlaying={this.state.isMusicPlaying}
                        />  
                        <audio id="audio" ref={(audioTag) => { this.audio = audioTag }} />
                    </div>
                )
            }
        }

        ReactDOM.render(<Container />, document.getElementById('hook'))

    </script>
    
</body>
</html>

