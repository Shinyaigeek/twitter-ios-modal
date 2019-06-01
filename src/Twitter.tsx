import React from 'react'

import {CSSTransition} from 'react-transition-group'

import './Twitter.scss'

interface TProps {
    flag:boolean,
    NightMode:boolean,
    handleFlag:Function
}


export default class Twitter extends React.Component <TProps,any> {
    constructor(props:any){
        super(props)
        const height:number = window.innerHeight;
        // @ts-ignore
        const childrenHeight:number = this.props.children ? 43 * this.props.children.length:0;
        this.state = {
            flag:this.props.flag,
            modalHeight:height - 90 - childrenHeight
        }

        this.handleMove = this.handleMove.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
        this.handleEnd = this.handleEnd.bind(this);
    }

    handleHeight(y:number){
        this.setState({
            modalHeight:y
        })
    }

    handleMove(e:any){
        const y = e.changedTouches[0].pageY;
        return this.handleHeight(y);
    }

    handleEnd(e:any){
        const endY = e.changedTouches[0].pageY;
        // @ts-ignore
        const childrenHeight:number = this.props.children ? 43 * this.props.children.length:0;
        const height:number = window.innerHeight - 90 - childrenHeight;
        if(endY >= height * 1.2){
            return this.props.handleFlag(false);
        }
        return this.handleHeight(height);
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
                <CSSTransition
                    in={this.state.flag}
                    timeout={3000}
                    className={this.props.NightMode ? "Darktwitter--modal":"twitter--modal"}
                    onTouchMove={(e:any) => this.handleMove(e)}
                    style={{top:this.state.modalHeight}}
                    onTouchEnd={(e:any) => this.handleEnd(e)}
                >
                <div>
                {this.props.children}
                <div className="modal--section__cansel" onClick={() => this.props.handleFlag(false)}>キャンセル</div>
                </div>
                </CSSTransition>
                <div className="awkward--sheet" onClick={() => this.props.handleFlag(false)} style={{display:this.state.flag ? "block":"none"}}></div>
            </div>
        )
    }
}