import { createContext, useContext } from "react";

export interface ITrajectory {
    id: string;
    points: IPoint[]
}
export interface IPoint {
    time: number;
    x: number;
    y: number;
}
const defaultTrajectories: ITrajectory[] = [
    {
        id: "0",
        points: [
            {
                time: 0,
                x: 0,
                y: 0
            }
        ]
    }
]

export const TrajectoriesContext = createContext(defaultTrajectories);

export function useTrajectoriesContext() {
    return useContext(TrajectoriesContext);
}
