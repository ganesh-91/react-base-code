import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { connect } from "react-redux";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {}

    render() {
        return (
            <Jumbotron >
                Home
            </Jumbotron>
        );
    }
    getDriverList = () => {};

}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateDriverListData: (data) => {
        //     dispatch(driverAction.updateDriverListData(data));
        // },
    };
};

const mapStateToProps = (store) => {
    return {
        // singleDriver: store.singleDriver,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);


