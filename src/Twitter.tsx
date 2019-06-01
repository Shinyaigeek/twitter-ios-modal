import React from 'react'

import {CSSTransition} from 'react-transition-group'

import './Twitter.scss'

interface TProps {
    flag:boolean,
    NightMode:boolean,
}


export default class Twitter extends React.Component <TProps,any> {
    constructor(props:any){
        super(props)
        this.state = {
            flag:false,
            modalHeight:500
        }

        this.handleFlag = this.handleFlag.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
    }

    componentDidMount(){

    }

    handleHeight(y:number){
        this.setState({
            modalHeight:y
        })
    }

    handleFlag(flag:boolean){
        this.setState({
            flag:flag
        })
    }

    handleMove(e:any){
        const y = e.changedTouches[0].pageY;
        // @ts-ignore
        window.move = y;
        return this.handleHeight(y);
    }

    handleEnd(e:any){
        const endY = e.changedTouches[0].pageY;
        console.log(endY)
        if(endY >= 650){
            return this.handleFlag(false);
        }
        return this.handleHeight(700);
    }

    render() {
        return (
            <div>
                <CSSTransition
                    in={this.props.flag}
                    timeout={3000}
                    className={this.props.NightMode ? "Darktwitter--modal":"twitter--modal"}
                    onTouchMove={(e:any) => this.handleMove(e)}
                    style={{top:this.state.modalHeight}}
                    onTouchEnd={(e:any) => this.handleEnd(e)}
                >
                <div>
                {this.props.children}
                <div className="modal--section__cansel" onClick={() => this.handleFlag(false)}>キャンセル</div>
                </div>
                </CSSTransition>
                <div className="awkward--sheet" onClick={() => this.handleFlag(false)} style={{display:this.props.flag ? "block":"none"}}></div>
            </div>
        )
    }
}