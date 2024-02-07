import React, { Component } from 'react'
import './App.css'

class App extends Component {
    state = {
        person: {
            fullName: 'Bahri Shayma',
            bio: 'I am a passionate web developer with a strong foundation in front-end and back-end technologies. My journey in the world of coding began with a love for creating visually appealing and responsive user interfaces. As a detail-oriented developer, I take pride in writing clean and efficient code that enhances the overall user experience.\n\nWith expertise in HTML, CSS, JavaScript, and various modern frameworks, I strive to stay up-to-date with the latest industry trends and technologies. Whether it\'s crafting beautiful websites or building robust server-side applications, I am committed to delivering high-quality solutions that meet the needs of clients and users alike.',
            profession: 'Web Developer',
        },
        shows: false,
        lastMountTime: null,
        isFlipped: false,
    }

    componentDidMount() {
        this.setState({ lastMountTime: new Date() })

        // Set up interval to update time every second
        this.intervalId = setInterval(() => {
        this.forceUpdate() // Trigger a re-render to update the time
    }, 1000)
}

    componentWillUnmount() {
        clearInterval(this.intervalId) // Clear interval to prevent memory leaks
    }

    handleToggleProfile = () => {
        this.setState({
            shows: !this.state.shows,
            isFlipped: true, // Set isFlipped to true when toggling profile to immediately show the back side
        })
    }

    handleFlippedClick = () => {
        this.setState({ isFlipped: !this.state.isFlipped })
    }

    calculateTimeInterval(lastMountTime) {
        if (!lastMountTime) return 'N/A'
        const currentTime = new Date()
        const interval = Math.floor((currentTime - lastMountTime) / 1000) // in seconds
        return `${interval} seconds`
    }

    render() {
        return (
        <div className="App">
            <h2 style={{ 
                fontFamily: 'fantasy',
                fontWeight: 'bold',
                fontSize: '30px',
                marginTop: '20px',
                animation: 'fadeIn 2s ease-in-out',
            }}>Flipped Card</h2>

        {/* Flipped Card Component */}
        <div className={`card ${this.state.isFlipped ? 'flipped' : ''}`} onClick={this.handleFlippedClick}>
            <div className="card-inner">
            {/* Front side */}
            <div className="card-front">
                <img src="image/sh.jpg" alt="Front" />
            </div>

            {/* Back side */}
            <div className="card-back">
                {this.state.shows && (
                <div>
                    <h1 style={{ 
                        textAlign: 'center', 
                        color: 'rgb(29,1,1)', 
                        fontWeight: 'bold', 
                        fontSize: '30px', 
                        marginTop: '5px',
                        }}>
                            {this.state.person.fullName}</h1>
                    <h2 style={{
                        textAlign: 'center',
                        color: '#641c1c',
                        fontSize: '20px',
                        animation: 'fadeIn 1s ease-in-out',
                    }}>
                        {this.state.person.profession}</h2>
                    <p style={{
                        textAlign: 'center',
                        lineHeight: '1.5',
                        color: 'black',
                        animation: 'fadeIn 2s ease-in-out',
                    }}>
                        {this.state.person.bio}</p>
                </div>
                )}
            </div>
        </div>
        </div>

        {/* Button to toggle shows state */}
        <button onClick={this.handleToggleProfile} style={{ 
            marginTop: '10px',
            backgroundColor: '#d8a0a0',
            borderRadius: '30%',
            border: 'none',
            fontFamily: 'fantasy',
            justifyContent: 'center',
            color: '#641c1c',
            display: 'flex',
            marginLeft: '43%',
            marginBottom: '10px',
            marginTop: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            }}>Toggle Profile</button>

        {/* Display time interval since last component mount */}
        <p style={{ 
            marginTop: '10px',
            color: '#641c1c',
            fontFamily: 'fantasy',
            textAlign: 'center',
            marginRight: '7%',
            animation: 'fadeIn 3s ease-in-out',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
        Time since last mount: {this.calculateTimeInterval(this.state.lastMountTime)}</p>
        </div>
        )
    }
}

export default App