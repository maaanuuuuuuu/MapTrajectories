import { ITrajectory } from "../../context/TrajectoriesContext";

export const useController = (infoTrajectory: ITrajectory) => {
    
    const calcDistance = (dots: {x:number; y:number}[]) => {
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

    return {calcDistance, arrivalTime, departureTime, travelTime, distanceTraveled};
} 