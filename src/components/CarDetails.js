import React, { PureComponent } from 'react';
import { formatCurrency } from "../utilities";
import { Button } from "antd";
import { HeartFilled } from '@ant-design/icons';

export default class CarDetails extends PureComponent {
    render() {
        const { car, favorites, carsInOrder } = this.props;
        const isFavorite = favorites && favorites.includes(car);
        const isReserved = carsInOrder && carsInOrder.includes(car);
        return (
            <>
                <div onClick={() => this.props.saveCarToFavorites(car.key)} className="details__top" data-testid="favorite">
                    < HeartFilled className={`details-top__icon ${isFavorite && "details-top__icon-red"}`} />
                    <div className="details-top__save">{isFavorite ? "Saved" : "Save"}</div>
                </div>
                <div className="details__vehicle">{car.year} {car.make} {car.model}</div>
                <div className="details-top__price">MSRP: {formatCurrency(car.msrp)}</div>
                <div className="details__color">Exterior color: {car.exteriorColor}</div>
                <Button
                    className={isReserved ? "details__reserved-button" : "details__reservation-button"}
                    onClick={() => this.props.toggleReservationModal(car)}
                    disabled={isReserved}
                >
                    {isReserved ? "Reserved" : "Make Reservation"}
                </Button>
            </>
        )
    }
}