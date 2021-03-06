/**
 * Created by cristianfelix on 12/31/15.
 */
import React from 'react';
import Container from '../Common/Container';
import Store from '../../store';
import {addFilterComponent} from '../../reducers'
//var button = require('file!./AddButton.png');
class Section extends React.Component {
    getStyle() {
        return {
            position:"relative",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            top: this.props.top,
            width: this.props.width,
            borderRight: "solid 1px #ccc"
        }
    }



    render() {
        let {type} = this.props;
        console.log("Section.js",22, type)
        let titleStyle = {
            fontWeight: "bold",
            color:"#878A99",
            padding: 3,
            fontSize: 25,
            margin: 0
        };

		let hrStyle = {
			width: "95%",
			color:this.props.color
        };

		let buttonStyle = {
				display:"inline-block",
        position:"absolute",
				width : "40",
				height : "40",
				top:"-60%",
				left:"75%",

        };


		let divStyle = {
				display:"inline-block",
                position:"relative"
        };

        let containerStyle = {
            flexGrow: 1,
            overflow: "auto",
            padding: 5,
            display: "flex"
        };

        let style = this.getStyle();

        if(type == "horizontal") {
            style.flexDirection = undefined
        }
        let {dispatch} = this.props;



        return (
            <Container style={style}>
                <h1 style={titleStyle}>{this.props.title}</h1>
					<div style = {divStyle}>
					<hr style={hrStyle}>
					</hr>
					<img style={buttonStyle} onClick={()=>dispatch(addFilterComponent(""))}  />
					</div>
                <div style={containerStyle}>
                    {this.props.children}
                </div>

            </Container>
        );
    }
}

Section.propTypes = {};
Section.defaultProps = {};

export default Section;
