import React, {Component} from "react";
import {TicTacToeField} from "../tic-tac-toe-field/tic-tac-toe-field";
import './tic-tac-toe-container.scss';
import {Score} from "../score/score";
import {ChooseGameParams} from "../choose-game-params/choose-game-params";
import {Shadow} from "../shadow/shadow";
import {Tab} from "../tab/Tab";

export class TicTacToeContainer extends Component {
    win_user_array = [
      "123",
      "456",
      "789",
      "147",
      "258",
      "369",
      "159",
      "357"
    ];

    playersCountsParams = {
      1: {
        playerTabName: "You turn!",
        secondTabName: "Computer's turn!",
        secondScoreName: "computer"
      },
      2: {
        playerTabName: "Go Player 1",
        secondTabName: "Go Player 2",
        secondScoreName: "player 2"
      }
    };
    constructor(props) {
      super(props);
      this.state = {
        playersCount: null,
        player1Sign: null,
        player2Sign: null,
        player1Score: 0,
        player2Score: 0
      }
    }

    selectPlayersCount = (playersCount) => {
      this.setState({playersCount});
    };

    player1Sign = (player1Sign) => {
      this.setState({
        player1Sign,
        player2Sign: player1Sign === 'X' ? 'O' : 'X'
      });
    };

    reset = () => {
      this.setState({
        playersCount: null,
        player1Sign: null,
        player2Sign: null,
        player1Score: 0,
        player2Score: 0
      })
    };

    render() {
      return (
        <div className="box-container">
          <div className="tabs">
            <Tab className="tab_p1" title={this.playersCountsParams[this.state.playersCount]?.playerTabName}/>
            <Tab className="tab_p2" title={this.playersCountsParams[this.state.playersCount]?.secondTabName}/>
          </div>
          <div className="ttt-box">
            <div className={"ttt-box__header " + (this.state.player1Sign ? 'ttt-box__header_visible' : '')}>
              <div className="ttt-box__results">
                <Score score={this.state.player1Score} playerName='player 1'/>
                <Score score={this.state.player2Score} playerName={this.playersCountsParams[this.state.playersCount]?.secondScoreName}/>
              </div>
              <button className="ttt-box__reset" onClick={this.reset}>Reset All</button>
            </div>
            <div className="ttt-field">
              {!this.state.player1Sign && <ChooseGameParams
                selectPlayersCount={this.selectPlayersCount}
                playersCount={this.state.playersCount}
                player1Sign={this.player1Sign}/>}
              {this.state.player1Sign && <TicTacToeField
                playersCount={this.state.playersCount}
                player1Sign={this.state.player1Sign}
                player2Sign={this.state.player2Sign}/>}
              {/* <Shadow/>*/}
            </div>
          </div>
        </div>
      )
    }
}