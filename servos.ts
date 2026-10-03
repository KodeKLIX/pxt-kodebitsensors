/**
 * Control micro servos
 */
//% color="#03AA74" weight=24 icon="\uf021" blockGap=8
//% blockId="servos" block="Servo module"
namespace servos {
    //% weight=50
    //% blockId=servoservosetangle18 block="Set 180°Servo %servo angle %degrees °"
    //% degrees.defl=90
    //% degrees.min=0 degrees.max=180
    //% blockGap=8
    export function Servo_angle(servo: AnalogPin, degrees: number = 90): void {
        // send pulse
        pins.servoSetPulse(servo, Math.map(degrees, 0, 180, 500, 2500))
    }
    //% weight=30
    //% blockId=servoservosetpulse block="Configure the servo %servo2 pulse to %pulse microseconds (μs)"
    //% pulse.defl=1500
    //% pulse.min=500 pulse.max=2500
    //% blockGap=8
    export function Servo_pulse(servo2: AnalogPin, pulse: number = 1500): void {
        // send pulse
        pins.servoSetPulse(servo2, pulse)
    }
    //% weight=20
    //% blockId=servoservosetspeed36 block="Set 360°Servo %servo speed %speed ％"
    //% speed.defl=50
    //% speed.min=-100 speed.max=100
    //% blockGap=8
    export function Servo_360speed(servo: AnalogPin, speed: number = 50): void {
        // send pulse
        if(speed > 0 || speed == 0) pins.servoSetPulse(servo, Math.map(speed, 0, 100, 1540, 2500))
        else if(speed < 0) pins.servoSetPulse(servo, Math.map(speed, -100, -1, 500, 1460))
    }
    //% weight=10
    //% blockId=servoservosetstop36 block="Set 360°Servo %servo stop "
    //% blockGap=8
    export function Servo_360stop(servo: AnalogPin): void {
        // send pulse
        pins.servoSetPulse(servo, 0)
    }

}
