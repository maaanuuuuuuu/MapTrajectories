import React from 'react';
import { ITrajectory } from '../../context/TrajectoriesContext';

export interface IControllerProps {
    infoTrajectory: ITrajectory
}
export const Controller = ({infoTrajectory}: IControllerProps) => {

    const calcDistance = (dots: {x:number; y:number}[]) => { // TODO use subset ? // TODO use TDD
        let distance = 0;
        for(let i=0; i<dots.length -1; i++) {
            let subDist = Math.sqrt(Math.pow(dots[1].x-dots[0].x, 2) + Math.pow(dots[1].y-dots[0].y, 2));
            distance += subDist;
        }

        return distance;
    }

    const arrivalTime = infoTrajectory.points.sort((a,b) => a.time > b.time ? 1 : -1)[0].time;
    const departureTime = infoTrajectory.points.sort((a,b) => a.time > b.time ? 1 : -1)[infoTrajectory.points.length -1].time;
    const travelTime = departureTime - arrivalTime;
    const distanceTraveled = calcDistance(infoTrajectory.points.map(p => { 
        return {
            x: p.x,
            y: p.y
        }
    }));

    return (
        <ul>
            <li>id: {infoTrajectory.id}</li>
            <li>number of stops: {infoTrajectory.points.length -2}</li>
            <li>arrival: {arrivalTime}</li>
            <li>departure:{departureTime}</li>
            <li>travel time: {travelTime}</li>
            <li>distance traveled: {distanceTraveled}</li>
            <li>average speed: {distanceTraveled/travelTime}</li>
        </ul>
    );
}
