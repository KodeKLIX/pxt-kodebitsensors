/**
 * Control micro Joystick
 */
//% weight=23 color=#50A820 icon="\uf0b2" blockGap=8
//% blockId="Joystick" block="Joystick module"
namespace Joystick {

    export enum enRocker {
        //% blockId="Nostate" block="none"
        Nostate = 0,
        //% blockId="Up" block="up"
        Up,
        //% blockId="Down" block="down"
        Down,
        //% blockId="Left" block="left"
        Left,
        //% blockId="Right" block="right"
        Right,
        //% blockId="Press" block="select"
        Press
    }

    //% blockId=cbit_Rocker block="Joystick | Pin VRX %pin1| Pin VRY %pin2| Pin SW %pin3| return %value"
    //% weight=100
    //% blockGap=10
    //% color="#50A820"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function Rocker(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value: enRocker): boolean {

        //pins.setPull(pin3, PinPullMode.PullUp);
        let x = pins.analogReadPin(pin1);
        let y = pins.analogReadPin(pin2);
        let z = pins.analogReadPin(pin3);
        let now_state = enRocker.Nostate;

        if (x <= 20) // up
        {

            now_state = enRocker.Up;

        }
        if (x >= 1000) // down
        {

            now_state = enRocker.Down;
        }
        if (y <= 50) // right
        {
            now_state = enRocker.Right;
        }
        if (y >= 1000) // left
        {
            now_state = enRocker.Left;
        }
        if (z <= 20)
            now_state = enRocker.Press;

        if (now_state == value)
            return true;
        else
            return false;

    }
}
