import { ITrajectory } from "../../context/TrajectoriesContext";

export const useMap = (displayedTrajectories: ITrajectory[], mapHeight:number, mapWidth:number) => {
    const normalizeX = (value: number) => {
        const biggestX = Math.max(...displayedTrajectories.map(trajectory => trajectory.points).flat().map(t => t.x));
        
        return (value * mapWidth/biggestX);
    }
    const normalizeY = (value: number) => {
        const biggestY = Math.max(...displayedTrajectories.map(trajectory => trajectory.points).flat().map(t => t.y));
        
        return (value * mapHeight/biggestY);
    }
    return {normalizeX, normalizeY};
} 