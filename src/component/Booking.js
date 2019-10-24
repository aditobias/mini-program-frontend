import React from 'react';
import 'antd/dist/antd.css';
import {Button, DatePicker} from 'antd';
import BookingResource from "../api/BookingResource";
import {connect} from "react-redux";

class Booking extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wayBillNumber : '',
            pickupDateTime : ''
        }
    }

    handleWayBillChange = (event) => {
        this.setState({ wayBillNumber: event.target.value});
    };

    handleDateChange = date => {
        const valueOfInput = new Date(date.format('YYYY/MM/DD'));
        this.setState({
            pickupDateTime: valueOfInput
        })
    };

    addBooking = () => {
        const newBookingCreated = {
            wayBillNumber : this.state.wayBillNumber,
            pickupDateTime : this.state.pickupDateTime
        };
        this.props.createNewBooking(newBookingCreated);
    };

    render(){
        return (
            <div>
                <div>
                    <span>WayBill Number: </span><input type="text" name="WaybillNum" onChange={this.handleWayBillChange}/>
                    <br />
                    <span>Pickup Time: </span><DatePicker onChange={this.handleDateChange}/>
                </div>
                <div>
                    <Button type="primary" style={{height: "75px", fontSize: "30px" }} onClick={this.addBooking}>Affirm</Button>
                    <Button  style={{height: "75px", fontSize: "30px" }} value="Active" onClick={this.handleChange}>Cancel</Button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = reduxStore => ({
    bookingList: reduxStore.bookingArr
});

const mapDispatchToProps =  () => ({
    createNewBooking: newBooking => {
        BookingResource.createBooking(newBooking)
            // .then(res => res.json())
            // .then(({id, wayBillNumber, pickUpDateTime}) =>
            //     dispatch({
            //         type: 'ADD_BOOKING',
            //         payload: {id, wayBillNumber, pickUpDateTime}
            //     })
            // )
    }
});


export default connect(mapDispatchToProps, mapStateToProps)(Booking);


