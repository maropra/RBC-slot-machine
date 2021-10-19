import React from "react";

class Slot extends React.Component {
    render() {
        let isWinner = this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3

        return (
            <div className="slot-container">
                <span>{this.props.s1}</span>
                <span>{this.props.s2}</span>
                <span>{this.props.s3}</span>
                <p>You {isWinner ? 'win' : 'loose'}!</p>
            </div>
        )
    }
}

export default Slot;