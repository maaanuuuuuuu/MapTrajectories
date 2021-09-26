import {renderHook} from "@testing-library/react-hooks";
import { ITrajectory } from "../../context/TrajectoriesContext";
import { useController } from "./useController";

const mockTrajectory: ITrajectory = {
    id: "test",
    points: [
        {
            x: 0, y: 0, time: 0
        },
        {
            x: 0, y: 0, time: 1
        },
    ]
}

describe("useController", () => {
    describe("calcDistance", () => {
        it("should calculate the distance correctly", () => {
            const { result } = renderHook(() => useController(mockTrajectory));
            const calcDistance = result.current.calcDistance;
            expect(calcDistance([{x:0, y:0}, {x:0, y:0}])).toEqual(0);
            expect(calcDistance([{x:0, y:0}, {x:1, y:0}])).toEqual(1);
            expect(calcDistance([{x:0, y:0}, {x:0, y:1}])).toEqual(1);
            expect(calcDistance([{x:0, y:0}, {x:1, y:1}])).toEqual(Math.sqrt(2));
        })
    })
})